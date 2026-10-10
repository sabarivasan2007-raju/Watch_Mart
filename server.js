const express = require('express');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const Database = require('better-sqlite3');

const app = express();
const PORT = process.env.PORT || 3000;
const db = new Database(path.join(__dirname, 'watch_mart.db'));
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');
app.use(express.json({ limit: '1mb' }));

// Relational database tables. Order and order-item records persist after server restarts.
db.exec(`
CREATE TABLE IF NOT EXISTS users (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 email TEXT NOT NULL UNIQUE,
 password_hash TEXT NOT NULL,
 created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS products (
 id INTEGER PRIMARY KEY,
 name TEXT NOT NULL, brand TEXT NOT NULL, category TEXT NOT NULL,
 price REAL NOT NULL, rating TEXT, color TEXT, warranty TEXT,
 description TEXT, features_json TEXT, image TEXT
);
CREATE TABLE IF NOT EXISTS orders (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 order_code TEXT NOT NULL UNIQUE,
 user_id INTEGER NOT NULL REFERENCES users(id),
 customer_name TEXT NOT NULL, phone TEXT NOT NULL, address TEXT NOT NULL,
 pincode TEXT NOT NULL, delivery_date TEXT NOT NULL, payment_method TEXT NOT NULL,
 total REAL NOT NULL, status TEXT NOT NULL DEFAULT 'PLACED', created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS order_items (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
 product_id INTEGER NOT NULL REFERENCES products(id),
 product_name TEXT NOT NULL, unit_price REAL NOT NULL, quantity INTEGER NOT NULL
);
`);

// Seed new catalogue entries on every start without overwriting existing products or orders.
// This also upgrades an existing 44-watch database with the additional model/category entries.
const products = JSON.parse(fs.readFileSync(path.join(__dirname, 'products.json'), 'utf8'));
const insert = db.prepare(`INSERT OR IGNORE INTO products
 (id,name,brand,category,price,rating,color,warranty,description,features_json,image)
 VALUES (@id,@name,@brand,@category,@price,@rating,@color,@warranty,@description,@features_json,@image)`);
const seed = db.transaction(items => items.forEach(p => insert.run({ ...p, features_json: JSON.stringify(p.features || []) })));
seed(products);
console.log(`Catalogue ready: ${db.prepare('SELECT COUNT(*) AS n FROM products').get().n} watches in SQLite database.`);

function publicProduct(row) {
 return { ...row, features: JSON.parse(row.features_json || '[]') , features_json: undefined };
}
app.get('/api/health', (req,res) => res.json({ ok:true, database:'SQLite', message:'WATCH MART backend is running' }));
app.get('/api/products', (req,res) => {
 const rows = db.prepare('SELECT * FROM products ORDER BY id').all().map(publicProduct);
 res.json(rows);
});

app.post('/api/auth/register', async (req,res) => {
 try {
  const email = String(req.body.email || '').trim().toLowerCase();
  const password = String(req.body.password || '');
  if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) return res.status(400).json({error:'Enter a valid Gmail address.'});
  if (password.length < 4) return res.status(400).json({error:'Password must be at least 4 characters.'});
  const hash = await bcrypt.hash(password, 10);
  const result = db.prepare('INSERT INTO users(email,password_hash) VALUES (?,?)').run(email,hash);
  res.status(201).json({user:{id:result.lastInsertRowid,email}});
 } catch (e) {
  if (String(e.message).includes('UNIQUE')) return res.status(409).json({error:'Account already exists. Please login.'});
  console.error(e); res.status(500).json({error:'Could not create account.'});
 }
});
app.post('/api/auth/login', async (req,res) => {
 const email = String(req.body.email || '').trim().toLowerCase();
 const password = String(req.body.password || '');
 if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email) || !password) return res.status(400).json({error:'Enter a valid Gmail and password.'});
 let user = db.prepare('SELECT * FROM users WHERE email=?').get(email);
 // First login creates an account, keeping the existing demo-style login flow easy to use.
 if (!user) {
  const hash = await bcrypt.hash(password,10);
  try { const result = db.prepare('INSERT INTO users(email,password_hash) VALUES (?,?)').run(email,hash); user = {id:result.lastInsertRowid,email,password_hash:hash}; }
  catch(e) { user = db.prepare('SELECT * FROM users WHERE email=?').get(email); }
 }
 if (!user || !(await bcrypt.compare(password,user.password_hash))) return res.status(401).json({error:'Incorrect password.'});
 res.json({user:{id:user.id,email:user.email}});
});

const orderTransaction = db.transaction(({ userId, customer, items, paymentMethod, total, orderCode }) => {
 const result = db.prepare(`INSERT INTO orders(order_code,user_id,customer_name,phone,address,pincode,delivery_date,payment_method,total)
 VALUES(?,?,?,?,?,?,?,?,?)`).run(orderCode,userId,customer.name,customer.phone,customer.address,customer.pincode,customer.deliveryDate,paymentMethod,total);
 const insertItem = db.prepare('INSERT INTO order_items(order_id,product_id,product_name,unit_price,quantity) VALUES(?,?,?,?,?)');
 for (const item of items) insertItem.run(result.lastInsertRowid,item.id,item.name,item.price,item.qty);
 return result.lastInsertRowid;
});
app.post('/api/orders', (req,res) => {
 try {
  const { userId, customer, items, paymentMethod } = req.body || {};
  if (!Number.isInteger(Number(userId)) || !customer || !Array.isArray(items) || items.length === 0) return res.status(400).json({error:'Missing customer, user or order items.'});
  const user = db.prepare('SELECT id FROM users WHERE id=?').get(Number(userId));
  if (!user) return res.status(401).json({error:'Please login again before ordering.'});
  const name=String(customer.name||'').trim(), phone=String(customer.phone||''), address=String(customer.address||'').trim(), pincode=String(customer.pincode||''), deliveryDate=String(customer.deliveryDate||'');
  if (!name || !/^[0-9]{10}$/.test(phone) || !address || !/^[0-9]{6}$/.test(pincode) || !deliveryDate) return res.status(400).json({error:'Please check all delivery details.'});
  if (!['UPI','COD'].includes(paymentMethod)) return res.status(400).json({error:'Select a valid payment method.'});
  let total=0; const verifiedItems=[];
  for (const item of items) {
   const qty=Number(item.qty), product=db.prepare('SELECT id,name,price FROM products WHERE id=?').get(Number(item.id));
   if (!product || !Number.isInteger(qty) || qty<1 || qty>99) return res.status(400).json({error:'Invalid watch or quantity in cart.'});
   total += product.price*qty; verifiedItems.push({...product,qty});
  }
  const orderCode='WM'+Date.now().toString().slice(-8)+Math.floor(Math.random()*90+10);
  const orderId=orderTransaction({userId:Number(userId),customer:{name,phone,address,pincode,deliveryDate},items:verifiedItems,paymentMethod,total,orderCode});
  res.status(201).json({orderId:orderCode,customer:{name,phone,address,pincode,deliveryDate},items:verifiedItems,paymentMethod,total,status:'PLACED',createdAt:new Date().toISOString(),databaseId:orderId});
 } catch(e) { console.error(e); res.status(500).json({error:'Order could not be saved. Please try again.'}); }
});
app.get('/api/orders', (req,res) => {
 const userId=Number(req.query.userId);
 if (!Number.isInteger(userId) || userId<1) return res.status(400).json({error:'A valid userId is required.'});
 const orders=db.prepare('SELECT * FROM orders WHERE user_id=? ORDER BY id DESC').all(userId);
 const getItems=db.prepare('SELECT product_id AS id,product_name AS name,unit_price AS price,quantity AS qty FROM order_items WHERE order_id=?');
 res.json(orders.map(o=>({orderId:o.order_code,customer:{name:o.customer_name,phone:o.phone,address:o.address,pincode:o.pincode,deliveryDate:o.delivery_date},items:getItems.all(o.id),paymentMethod:o.payment_method,total:o.total,status:o.status,createdAt:o.created_at})));
});

// Serve the same frontend and API from one local server (don't use Live Server for this backend version).
app.use(express.static(__dirname));
app.get('*', (req,res) => res.sendFile(path.join(__dirname,'index.html')));
app.listen(PORT, () => console.log(`WATCH MART running at http://localhost:${PORT}`));
