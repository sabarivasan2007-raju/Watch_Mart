// Live Server edition: runs entirely in the browser (no Node.js required).
// Accounts and orders are stored in this browser's localStorage, not on a remote server.
const API_BASE = '';
async function fetchBackendProducts(){ return false; }

function showProductDetails(id){
  const p = products.find(x=>x.id===id);
  if(!p) return;
  document.getElementById('detailsImage').src=p.image;
  document.getElementById('detailsName').innerText=p.name;
  document.getElementById('detailsBrand').innerText=p.brand;
  document.getElementById('detailsCategory').innerText=p.category;
  document.getElementById('detailsRating').innerText=p.rating;
  document.getElementById('detailsPrice').innerText='₹'+Number(p.price).toLocaleString('en-IN');
  document.getElementById('detailsDescription').innerText=p.description || 'Premium watch from WATCH MART.';
  document.getElementById('detailsColor').innerText=p.color || 'Premium finish';
  document.getElementById('detailsWarranty').innerText=p.warranty || '1 year manufacturer warranty';
  const ul=document.getElementById('detailsFeatures'); ul.innerHTML='';
  (p.features||['Premium design','Comfortable strap','Quality finish']).forEach(f=>{const li=document.createElement('li');li.textContent=f;ul.appendChild(li);});
  document.getElementById('detailsAdd').onclick=()=>{addToCart(p.id);closeModal('detailsModal');};
  document.getElementById('detailsBuy').onclick=()=>{buyNow(p.id);closeModal('detailsModal');};
  document.getElementById('detailsModal').style.display='block';
}


const products = [
 {
  "id": 1,
  "name": "Casio Analog Watch",
  "brand": "Casio",
  "category": "Casual",
  "price": 2499,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Black & Silver",
  "warranty": "2 years",
  "description": "Classic Casio analog watch with a clean dial and comfortable everyday design.",
  "features": [
   "Quartz movement",
   "Water resistant",
   "Stainless steel case",
   "Comfort strap"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Casio%20Casio%20Analog%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 2,
  "name": "Titan Classic Watch",
  "brand": "Titan",
  "category": "Luxury",
  "price": 6999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Brown & Gold",
  "warranty": "2 years",
  "description": "Elegant Titan classic watch designed for formal and premium occasions.",
  "features": [
   "Quartz movement",
   "Mineral glass",
   "Leather-style strap",
   "Water resistant"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Titan%20Titan%20Classic%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 3,
  "name": "Fastrack Sports Watch",
  "brand": "Fastrack",
  "category": "Sports",
  "price": 3499,
  "rating": "⭐⭐⭐⭐",
  "color": "Black",
  "warranty": "1 year",
  "description": "Sporty Fastrack watch built for an active everyday lifestyle.",
  "features": [
   "Sport design",
   "Durable strap",
   "Quartz movement",
   "Water resistant"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Fastrack%20Fastrack%20Sports%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 4,
  "name": "Apple Smart Watch",
  "brand": "Apple",
  "category": "Smartwatch",
  "price": 39999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Midnight",
  "warranty": "1 year",
  "description": "Premium Apple smartwatch with a modern display and smart features.",
  "features": [
   "Smart notifications",
   "Fitness tracking",
   "Touch display",
   "Bluetooth connectivity"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Apple%20Apple%20Smart%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 5,
  "name": "Samsung Galaxy Watch",
  "brand": "Samsung",
  "category": "Smartwatch",
  "price": 24999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Graphite",
  "warranty": "1 year",
  "description": "Samsung Galaxy smartwatch combining fitness, notifications and stylish design.",
  "features": [
   "AMOLED display",
   "Fitness tracking",
   "Heart-rate monitoring",
   "Bluetooth connectivity"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Samsung%20Samsung%20Galaxy%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 6,
  "name": "Fossil Premium Watch",
  "brand": "Fossil",
  "category": "Luxury",
  "price": 11999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Black",
  "warranty": "2 years",
  "description": "Fossil premium watch with a sophisticated design for everyday wear.",
  "features": [
   "Quartz movement",
   "Premium finish",
   "Comfortable strap",
   "Water resistant"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Fossil%20Fossil%20Premium%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 7,
  "name": "Sonata Classic Watch",
  "brand": "Sonata",
  "category": "Casual",
  "price": 1799,
  "rating": "⭐⭐⭐⭐",
  "color": "Blue",
  "warranty": "1 year",
  "description": "Sonata classic watch offering simple styling and reliable everyday use.",
  "features": [
   "Quartz movement",
   "Lightweight case",
   "Comfort strap",
   "Everyday design"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Sonata%20Sonata%20Classic%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 8,
  "name": "Noise Smart Watch",
  "brand": "Noise",
  "category": "Smartwatch",
  "price": 2999,
  "rating": "⭐⭐⭐⭐",
  "color": "Green & Black",
  "warranty": "1 year",
  "description": "Noise smart watch with useful health and activity features.",
  "features": [
   "Activity tracking",
   "Smart notifications",
   "Touch display",
   "Bluetooth connectivity"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Noise%20Noise%20Smart%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 9,
  "name": "Timex Expedition Field Watch",
  "brand": "Timex",
  "category": "Casual",
  "price": 4299,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Olive & Black",
  "warranty": "1 year",
  "description": "Timex timex expedition field watch with a olive & black finish, designed for style and everyday use.",
  "features": [
   "Stylish dial design",
   "Comfortable strap",
   "Reliable timekeeping",
   "Everyday wear"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Timex%20Timex%20Expedition%20Field%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 10,
  "name": "Rolex Oyster Style Watch",
  "brand": "Rolex",
  "category": "Luxury",
  "price": 89999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Silver & Black",
  "warranty": "1 year",
  "description": "Rolex rolex oyster style watch with a silver & black finish, designed for style and everyday use.",
  "features": [
   "Stylish dial design",
   "Comfortable strap",
   "Reliable timekeeping",
   "Everyday wear"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Rolex%20Rolex%20Oyster%20Style%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 11,
  "name": "Seiko 5 Automatic Watch",
  "brand": "Seiko",
  "category": "Luxury",
  "price": 18999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Blue & Silver",
  "warranty": "1 year",
  "description": "Seiko seiko 5 automatic watch with a blue & silver finish, designed for style and everyday use.",
  "features": [
   "Stylish dial design",
   "Comfortable strap",
   "Reliable timekeeping",
   "Everyday wear"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Seiko%20Seiko%205%20Automatic%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 12,
  "name": "Citizen Eco-Drive Watch",
  "brand": "Citizen",
  "category": "Luxury",
  "price": 22999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Black & Steel",
  "warranty": "1 year",
  "description": "Citizen citizen eco-drive watch with a black & steel finish, designed for style and everyday use.",
  "features": [
   "Stylish dial design",
   "Comfortable strap",
   "Reliable timekeeping",
   "Everyday wear"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Citizen%20Citizen%20Eco-Drive%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 13,
  "name": "G-Shock Digital Sports Watch",
  "brand": "Casio",
  "category": "Sports",
  "price": 7999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Black",
  "warranty": "1 year",
  "description": "Casio g-shock digital sports watch with a black finish, designed for style and everyday use.",
  "features": [
   "Sport-inspired design",
   "Durable strap",
   "Water-resistant design",
   "Comfortable fit"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Casio%20G-Shock%20Digital%20Sports%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 14,
  "name": "Casio Vintage Digital Watch",
  "brand": "Casio",
  "category": "Casual",
  "price": 3499,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Gold",
  "warranty": "1 year",
  "description": "Casio casio vintage digital watch with a gold finish, designed for style and everyday use.",
  "features": [
   "Stylish dial design",
   "Comfortable strap",
   "Reliable timekeeping",
   "Everyday wear"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Casio%20Casio%20Vintage%20Digital%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 15,
  "name": "Titan Raga Women's Watch",
  "brand": "Titan",
  "category": "Women",
  "price": 8499,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Rose Gold",
  "warranty": "1 year",
  "description": "Titan titan raga women's watch with a rose gold finish, designed for style and everyday use.",
  "features": [
   "Stylish dial design",
   "Comfortable strap",
   "Reliable timekeeping",
   "Everyday wear"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Titan%20Titan%20Raga%20Women%27s%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 16,
  "name": "Fastrack Women's Analog Watch",
  "brand": "Fastrack",
  "category": "Women",
  "price": 2499,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Pink",
  "warranty": "1 year",
  "description": "Fastrack fastrack women's analog watch with a pink finish, designed for style and everyday use.",
  "features": [
   "Stylish dial design",
   "Comfortable strap",
   "Reliable timekeeping",
   "Everyday wear"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Fastrack%20Fastrack%20Women%27s%20Analog%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 17,
  "name": "Sonata Women's Slim Watch",
  "brand": "Sonata",
  "category": "Women",
  "price": 1499,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Silver",
  "warranty": "1 year",
  "description": "Sonata sonata women's slim watch with a silver finish, designed for style and everyday use.",
  "features": [
   "Stylish dial design",
   "Comfortable strap",
   "Reliable timekeeping",
   "Everyday wear"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Sonata%20Sonata%20Women%27s%20Slim%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 18,
  "name": "Fossil Jacqueline Women's Watch",
  "brand": "Fossil",
  "category": "Women",
  "price": 10999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Rose Gold",
  "warranty": "1 year",
  "description": "Fossil fossil jacqueline women's watch with a rose gold finish, designed for style and everyday use.",
  "features": [
   "Stylish dial design",
   "Comfortable strap",
   "Reliable timekeeping",
   "Everyday wear"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Fossil%20Fossil%20Jacqueline%20Women%27s%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 19,
  "name": "Apple Watch SE",
  "brand": "Apple",
  "category": "Smartwatch",
  "price": 24999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Starlight",
  "warranty": "1 year",
  "description": "Apple apple watch se with a starlight finish, designed for style and everyday use.",
  "features": [
   "Smart notifications",
   "Activity tracking",
   "Touch display",
   "Bluetooth connectivity"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Apple%20Apple%20Watch%20SE%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 20,
  "name": "Samsung Galaxy Watch Classic",
  "brand": "Samsung",
  "category": "Smartwatch",
  "price": 28999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Black",
  "warranty": "1 year",
  "description": "Samsung samsung galaxy watch classic with a black finish, designed for style and everyday use.",
  "features": [
   "Smart notifications",
   "Activity tracking",
   "Touch display",
   "Bluetooth connectivity"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Samsung%20Samsung%20Galaxy%20Watch%20Classic%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 21,
  "name": "Noise ColorFit Pro",
  "brand": "Noise",
  "category": "Smartwatch",
  "price": 2499,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Blue",
  "warranty": "1 year",
  "description": "Noise noise colorfit pro with a blue finish, designed for style and everyday use.",
  "features": [
   "Smart notifications",
   "Activity tracking",
   "Touch display",
   "Bluetooth connectivity"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Noise%20Noise%20ColorFit%20Pro%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 22,
  "name": "boAt Wave Smartwatch",
  "brand": "boAt",
  "category": "Smartwatch",
  "price": 1999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Black",
  "warranty": "1 year",
  "description": "boAt boat wave smartwatch with a black finish, designed for style and everyday use.",
  "features": [
   "Smart notifications",
   "Activity tracking",
   "Touch display",
   "Bluetooth connectivity"
  ],
  "image": "https://tse1.mm.bing.net/th?q=boAt%20boAt%20Wave%20Smartwatch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 23,
  "name": "Amazfit GTR Smartwatch",
  "brand": "Amazfit",
  "category": "Smartwatch",
  "price": 9999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Graphite",
  "warranty": "1 year",
  "description": "Amazfit amazfit gtr smartwatch with a graphite finish, designed for style and everyday use.",
  "features": [
   "Smart notifications",
   "Activity tracking",
   "Touch display",
   "Bluetooth connectivity"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Amazfit%20Amazfit%20GTR%20Smartwatch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 24,
  "name": "Garmin Forerunner Sports Watch",
  "brand": "Garmin",
  "category": "Sports",
  "price": 24999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Black",
  "warranty": "1 year",
  "description": "Garmin garmin forerunner sports watch with a black finish, designed for style and everyday use.",
  "features": [
   "Sport-inspired design",
   "Durable strap",
   "Water-resistant design",
   "Comfortable fit"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Garmin%20Garmin%20Forerunner%20Sports%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 25,
  "name": "Timex Ironman Sports Watch",
  "brand": "Timex",
  "category": "Sports",
  "price": 5999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Black & Red",
  "warranty": "1 year",
  "description": "Timex timex ironman sports watch with a black & red finish, designed for style and everyday use.",
  "features": [
   "Sport-inspired design",
   "Durable strap",
   "Water-resistant design",
   "Comfortable fit"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Timex%20Timex%20Ironman%20Sports%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 26,
  "name": "Puma Active Digital Watch",
  "brand": "Puma",
  "category": "Sports",
  "price": 4999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Black",
  "warranty": "1 year",
  "description": "Puma puma active digital watch with a black finish, designed for style and everyday use.",
  "features": [
   "Sport-inspired design",
   "Durable strap",
   "Water-resistant design",
   "Comfortable fit"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Puma%20Puma%20Active%20Digital%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 27,
  "name": "Titan Edge Ultra Slim",
  "brand": "Titan",
  "category": "Luxury",
  "price": 13999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Silver",
  "warranty": "1 year",
  "description": "Titan titan edge ultra slim with a silver finish, designed for style and everyday use.",
  "features": [
   "Stylish dial design",
   "Comfortable strap",
   "Reliable timekeeping",
   "Everyday wear"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Titan%20Titan%20Edge%20Ultra%20Slim%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 28,
  "name": "Fossil Grant Chronograph",
  "brand": "Fossil",
  "category": "Luxury",
  "price": 14999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Brown & Black",
  "warranty": "1 year",
  "description": "Fossil fossil grant chronograph with a brown & black finish, designed for style and everyday use.",
  "features": [
   "Stylish dial design",
   "Comfortable strap",
   "Reliable timekeeping",
   "Everyday wear"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Fossil%20Fossil%20Grant%20Chronograph%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 29,
  "name": "Sonata Poze Casual Watch",
  "brand": "Sonata",
  "category": "Casual",
  "price": 1999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Blue",
  "warranty": "1 year",
  "description": "Sonata sonata poze casual watch with a blue finish, designed for style and everyday use.",
  "features": [
   "Stylish dial design",
   "Comfortable strap",
   "Reliable timekeeping",
   "Everyday wear"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Sonata%20Sonata%20Poze%20Casual%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 30,
  "name": "Fastrack Reflex Active",
  "brand": "Fastrack",
  "category": "Smartwatch",
  "price": 3499,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Black",
  "warranty": "1 year",
  "description": "Fastrack fastrack reflex active with a black finish, designed for style and everyday use.",
  "features": [
   "Smart notifications",
   "Activity tracking",
   "Touch display",
   "Bluetooth connectivity"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Fastrack%20Fastrack%20Reflex%20Active%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 31,
  "name": "Casio Edifice Chronograph",
  "brand": "Casio",
  "category": "Luxury",
  "price": 11999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Black & Silver",
  "warranty": "1 year",
  "description": "Casio casio edifice chronograph with a black & silver finish, designed for style and everyday use.",
  "features": [
   "Stylish dial design",
   "Comfortable strap",
   "Reliable timekeeping",
   "Everyday wear"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Casio%20Casio%20Edifice%20Chronograph%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 32,
  "name": "Timex Classic Leather Watch",
  "brand": "Timex",
  "category": "Casual",
  "price": 3299,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Brown",
  "warranty": "1 year",
  "description": "Timex timex classic leather watch with a brown finish, designed for style and everyday use.",
  "features": [
   "Stylish dial design",
   "Comfortable strap",
   "Reliable timekeeping",
   "Everyday wear"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Timex%20Timex%20Classic%20Leather%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 33,
  "name": "Michael Kors Women's Watch",
  "brand": "Michael Kors",
  "category": "Women",
  "price": 17999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Gold",
  "warranty": "1 year",
  "description": "Michael Kors michael kors women's watch with a gold finish, designed for style and everyday use.",
  "features": [
   "Stylish dial design",
   "Comfortable strap",
   "Reliable timekeeping",
   "Everyday wear"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Michael%20Kors%20Michael%20Kors%20Women%27s%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 34,
  "name": "Titan Workwear Men's Watch",
  "brand": "Titan",
  "category": "Men",
  "price": 4999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Blue & Silver",
  "warranty": "1 year",
  "description": "Titan titan workwear men's watch with a blue & silver finish, designed for style and everyday use.",
  "features": [
   "Stylish dial design",
   "Comfortable strap",
   "Reliable timekeeping",
   "Everyday wear"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Titan%20Titan%20Workwear%20Men%27s%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 35,
  "name": "Fastrack Men's Streetwear Watch",
  "brand": "Fastrack",
  "category": "Men",
  "price": 2999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Black",
  "warranty": "1 year",
  "description": "Fastrack fastrack men's streetwear watch with a black finish, designed for style and everyday use.",
  "features": [
   "Stylish dial design",
   "Comfortable strap",
   "Reliable timekeeping",
   "Everyday wear"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Fastrack%20Fastrack%20Men%27s%20Streetwear%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 36,
  "name": "Casio Youth Digital Watch",
  "brand": "Casio",
  "category": "Men",
  "price": 2799,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Black",
  "warranty": "1 year",
  "description": "Casio casio youth digital watch with a black finish, designed for style and everyday use.",
  "features": [
   "Stylish dial design",
   "Comfortable strap",
   "Reliable timekeeping",
   "Everyday wear"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Casio%20Casio%20Youth%20Digital%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 37,
  "name": "Diesel Mega Chief Watch",
  "brand": "Diesel",
  "category": "Luxury",
  "price": 19999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Black",
  "warranty": "1 year",
  "description": "Diesel diesel mega chief watch with a black finish, designed for style and everyday use.",
  "features": [
   "Stylish dial design",
   "Comfortable strap",
   "Reliable timekeeping",
   "Everyday wear"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Diesel%20Diesel%20Mega%20Chief%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 38,
  "name": "Orient Automatic Dress Watch",
  "brand": "Orient",
  "category": "Luxury",
  "price": 16999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Blue",
  "warranty": "1 year",
  "description": "Orient orient automatic dress watch with a blue finish, designed for style and everyday use.",
  "features": [
   "Stylish dial design",
   "Comfortable strap",
   "Reliable timekeeping",
   "Everyday wear"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Orient%20Orient%20Automatic%20Dress%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 39,
  "name": "Realme Watch 3",
  "brand": "Realme",
  "category": "Smartwatch",
  "price": 2999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Black",
  "warranty": "1 year",
  "description": "Realme realme watch 3 with a black finish, designed for style and everyday use.",
  "features": [
   "Smart notifications",
   "Activity tracking",
   "Touch display",
   "Bluetooth connectivity"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Realme%20Realme%20Watch%203%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 40,
  "name": "Fire-Boltt Phoenix Smartwatch",
  "brand": "Fire-Boltt",
  "category": "Smartwatch",
  "price": 1799,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Black",
  "warranty": "1 year",
  "description": "Fire-Boltt fire-boltt phoenix smartwatch with a black finish, designed for style and everyday use.",
  "features": [
   "Smart notifications",
   "Activity tracking",
   "Touch display",
   "Bluetooth connectivity"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Fire-Boltt%20Fire-Boltt%20Phoenix%20Smartwatch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 41,
  "name": "Titan Karishma Men's Watch",
  "brand": "Titan",
  "category": "Men",
  "price": 2799,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Silver",
  "warranty": "1 year",
  "description": "Titan titan karishma men's watch with a silver finish, designed for style and everyday use.",
  "features": [
   "Stylish dial design",
   "Comfortable strap",
   "Reliable timekeeping",
   "Everyday wear"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Titan%20Titan%20Karishma%20Men%27s%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 42,
  "name": "Sonata Super Fibre Watch",
  "brand": "Sonata",
  "category": "Men",
  "price": 1299,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Black",
  "warranty": "1 year",
  "description": "Sonata sonata super fibre watch with a black finish, designed for style and everyday use.",
  "features": [
   "Stylish dial design",
   "Comfortable strap",
   "Reliable timekeeping",
   "Everyday wear"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Sonata%20Sonata%20Super%20Fibre%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 43,
  "name": "Fastrack Minimalist Women's Watch",
  "brand": "Fastrack",
  "category": "Women",
  "price": 2299,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "White",
  "warranty": "1 year",
  "description": "Fastrack fastrack minimalist women's watch with a white finish, designed for style and everyday use.",
  "features": [
   "Stylish dial design",
   "Comfortable strap",
   "Reliable timekeeping",
   "Everyday wear"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Fastrack%20Fastrack%20Minimalist%20Women%27s%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 44,
  "name": "Casio Enticer Men's Watch",
  "brand": "Casio",
  "category": "Men",
  "price": 4599,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Blue",
  "warranty": "1 year",
  "description": "Casio casio enticer men's watch with a blue finish, designed for style and everyday use.",
  "features": [
   "Stylish dial design",
   "Comfortable strap",
   "Reliable timekeeping",
   "Everyday wear"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Casio%20Casio%20Enticer%20Men%27s%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 45,
  "name": "Apple Watch Series 10",
  "brand": "Apple",
  "category": "Apple Watch",
  "price": 42999,
  "rating": "⭐⭐⭐⭐",
  "color": "Jet Black",
  "warranty": "1 year (verify seller warranty)",
  "description": "Apple Watch with health, workout, and notification features.",
  "features": [
   "Always-on Retina display",
   "ECG and heart-rate features",
   "Workout tracking",
   "Water resistant"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Apple%20Apple%20Watch%20Series%2010%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 46,
  "name": "Apple Watch Ultra 2",
  "brand": "Apple",
  "category": "Apple Watch",
  "price": 89900,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Natural Titanium",
  "warranty": "1 year (verify seller warranty)",
  "description": "Rugged Apple Watch designed for outdoor and endurance activities.",
  "features": [
   "Titanium case",
   "Precision GPS",
   "Action button",
   "Dive and outdoor features"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Apple%20Apple%20Watch%20Ultra%202%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 47,
  "name": "Apple Watch Series 9",
  "brand": "Apple",
  "category": "Apple Watch",
  "price": 32999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Midnight",
  "warranty": "1 year (verify seller warranty)",
  "description": "Apple Watch Series model with smart notifications and fitness tracking.",
  "features": [
   "Retina display",
   "Activity rings",
   "Heart-rate tracking",
   "iPhone integration"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Apple%20Apple%20Watch%20Series%209%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 48,
  "name": "Samsung Galaxy Watch7",
  "brand": "Samsung",
  "category": "Smartwatch",
  "price": 22999,
  "rating": "⭐⭐⭐⭐",
  "color": "Green",
  "warranty": "1 year (verify seller warranty)",
  "description": "Samsung Wear OS smartwatch for fitness and daily connectivity.",
  "features": [
   "AMOLED display",
   "Sleep coaching",
   "Heart-rate tracking",
   "GPS"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Samsung%20Samsung%20Galaxy%20Watch7%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 49,
  "name": "Samsung Galaxy Watch Ultra",
  "brand": "Samsung",
  "category": "Smartwatch",
  "price": 59999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Titanium Gray",
  "warranty": "1 year (verify seller warranty)",
  "description": "Rugged Samsung smartwatch for sports and outdoor use.",
  "features": [
   "Durable titanium design",
   "Multi-sport tracking",
   "GPS",
   "Health monitoring"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Samsung%20Samsung%20Galaxy%20Watch%20Ultra%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 50,
  "name": "Google Pixel Watch 3",
  "brand": "Google",
  "category": "Smartwatch",
  "price": 39999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Matte Black",
  "warranty": "1 year (verify seller warranty)",
  "description": "Google smartwatch with fitness insights and Google apps.",
  "features": [
   "Fitness tracking",
   "Google Maps",
   "Notifications",
   "Heart-rate monitoring"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Google%20Google%20Pixel%20Watch%203%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 51,
  "name": "Garmin Venu 3",
  "brand": "Garmin",
  "category": "Sports",
  "price": 41990,
  "rating": "⭐⭐⭐⭐",
  "color": "Black",
  "warranty": "1 year (verify seller warranty)",
  "description": "Fitness-focused GPS smartwatch for workouts and recovery tracking.",
  "features": [
   "GPS",
   "Workout tracking",
   "Sleep insights",
   "Long battery life"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Garmin%20Garmin%20Venu%203%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 52,
  "name": "Amazfit Balance",
  "brand": "Amazfit",
  "category": "Smartwatch",
  "price": 24999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Midnight Black",
  "warranty": "1 year (verify seller warranty)",
  "description": "Amazfit smartwatch with wellness tracking and everyday smart features.",
  "features": [
   "AMOLED display",
   "GPS",
   "Sleep tracking",
   "Bluetooth calling"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Amazfit%20Amazfit%20Balance%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 53,
  "name": "Noise ColorFit Icon 3",
  "brand": "Noise",
  "category": "Smartwatch",
  "price": 1799,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Rose Pink",
  "warranty": "1 year (verify seller warranty)",
  "description": "Affordable touchscreen smartwatch for everyday notifications and activity.",
  "features": [
   "Touchscreen",
   "Activity tracking",
   "Bluetooth calling",
   "Multiple watch faces"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Noise%20Noise%20ColorFit%20Icon%203%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 54,
  "name": "boAt Lunar Discovery",
  "brand": "boAt",
  "category": "Smartwatch",
  "price": 1499,
  "rating": "⭐⭐⭐⭐",
  "color": "Black",
  "warranty": "1 year (verify seller warranty)",
  "description": "Budget smartwatch with a large display and daily fitness features.",
  "features": [
   "Large display",
   "Bluetooth calling",
   "Activity tracking",
   "Custom watch faces"
  ],
  "image": "https://tse1.mm.bing.net/th?q=boAt%20boAt%20Lunar%20Discovery%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 55,
  "name": "Fire-Boltt Phoenix Ultra",
  "brand": "Fire-Boltt",
  "category": "Smartwatch",
  "price": 1999,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Silver Black",
  "warranty": "1 year (verify seller warranty)",
  "description": "Entry-level smartwatch with calling and activity features.",
  "features": [
   "Bluetooth calling",
   "Heart-rate tracking",
   "Sports modes",
   "Touch display"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Fire-Boltt%20Fire-Boltt%20Phoenix%20Ultra%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 56,
  "name": "Kids GPS Calling Watch",
  "brand": "KidsTime",
  "category": "Kids",
  "price": 2499,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Blue",
  "warranty": "1 year (verify seller warranty)",
  "description": "Children’s smartwatch concept with calling and location features; check carrier and GPS support before purchase.",
  "features": [
   "GPS location feature",
   "SOS button",
   "Calling support",
   "Comfortable child-size strap"
  ],
  "image": "https://tse1.mm.bing.net/th?q=KidsTime%20Kids%20GPS%20Calling%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 57,
  "name": "Kids Cartoon Digital Watch",
  "brand": "Sonata",
  "category": "Kids",
  "price": 699,
  "rating": "⭐⭐⭐⭐",
  "color": "Blue & Yellow",
  "warranty": "1 year (verify seller warranty)",
  "description": "Colourful digital watch sized for children and everyday timekeeping.",
  "features": [
   "Digital time display",
   "Lightweight strap",
   "Alarm",
   "Easy-to-read digits"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Sonata%20Kids%20Cartoon%20Digital%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 58,
  "name": "Kids Unicorn Analog Watch",
  "brand": "Zoop",
  "category": "Kids",
  "price": 599,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Pink & Purple",
  "warranty": "1 year (verify seller warranty)",
  "description": "Playful children’s analog watch with a colourful dial and easy-to-read hands.",
  "features": [
   "Colourful dial",
   "Lightweight case",
   "Comfort strap",
   "Everyday timekeeping"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Zoop%20Kids%20Unicorn%20Analog%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 59,
  "name": "Casio F-91W Digital Watch",
  "brand": "Casio",
  "category": "Digital",
  "price": 1695,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Black",
  "warranty": "1 year (verify seller warranty)",
  "description": "Classic lightweight digital watch with practical everyday functions.",
  "features": [
   "Digital display",
   "Daily alarm",
   "Stopwatch",
   "LED light"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Casio%20Casio%20F-91W%20Digital%20Watch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 60,
  "name": "Casio G-Shock GA-2100",
  "brand": "Casio",
  "category": "Sports",
  "price": 9995,
  "rating": "⭐⭐⭐⭐",
  "color": "Black",
  "warranty": "1 year (verify seller warranty)",
  "description": "Popular octagonal G-Shock design made for a tough everyday lifestyle.",
  "features": [
   "Shock resistant",
   "World time",
   "Stopwatch",
   "Water resistance"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Casio%20Casio%20G-Shock%20GA-2100%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 61,
  "name": "Seiko 5 Sports Automatic",
  "brand": "Seiko",
  "category": "Automatic",
  "price": 27900,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Blue & Steel",
  "warranty": "1 year (verify seller warranty)",
  "description": "Automatic mechanical watch with sporty styling.",
  "features": [
   "Automatic movement",
   "Day-date display",
   "Stainless steel bracelet",
   "Water resistance"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Seiko%20Seiko%205%20Sports%20Automatic%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 62,
  "name": "Citizen Eco-Drive Chandler",
  "brand": "Citizen",
  "category": "Analog",
  "price": 18900,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Black & Silver",
  "warranty": "1 year (verify seller warranty)",
  "description": "Light-powered analog watch with a field-watch look.",
  "features": [
   "Eco-Drive light-powered movement",
   "Luminous hands",
   "Date display",
   "Stainless steel case"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Citizen%20Citizen%20Eco-Drive%20Chandler%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 63,
  "name": "Timex Weekender",
  "brand": "Timex",
  "category": "Casual",
  "price": 5995,
  "rating": "⭐⭐⭐⭐",
  "color": "Cream & Brown",
  "warranty": "1 year (verify seller warranty)",
  "description": "Simple everyday analog watch with a relaxed field-inspired style.",
  "features": [
   "Easy-to-read dial",
   "Interchangeable strap style",
   "Indiglo-style night light varies by model",
   "Quartz movement"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Timex%20Timex%20Weekender%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 },
 {
  "id": 64,
  "name": "Fossil Gen 6 Smartwatch",
  "brand": "Fossil",
  "category": "Smartwatch",
  "price": 19995,
  "rating": "⭐⭐⭐⭐⭐",
  "color": "Black",
  "warranty": "1 year (verify seller warranty)",
  "description": "Wear OS smartwatch model; availability and software support may vary.",
  "features": [
   "Touchscreen",
   "Notifications",
   "Activity tracking",
   "Bluetooth"
  ],
  "image": "https://tse1.mm.bing.net/th?q=Fossil%20Fossil%20Gen%206%20Smartwatch%20official%20product%20photo%20watch&w=800&h=800&rs=1&p=0"
 }
];
let cart = [];
let currentUser = null;
async function loadProducts(){
  await fetchBackendProducts();
  displayProducts(products);
}

async function login(){
  const username=document.getElementById("username").value.trim();
  const password=document.getElementById("password").value.trim();
  const gmailPattern=/^[a-zA-Z0-9._%+-]+@gmail\.com$/i;
  if(!gmailPattern.test(username)){ alert("Please enter a valid Gmail address."); return; }
  if(!password){ alert("Please enter a password."); return; }
  const accounts=JSON.parse(localStorage.getItem('watchMartAccounts')||'{}');
  if(accounts[username] && accounts[username].password!==password){alert('Incorrect password. Please use the password you used when creating this demo account.');return;}
  if(!accounts[username]){
    accounts[username]={id:username,email:username,password};
    localStorage.setItem('watchMartAccounts',JSON.stringify(accounts));
  }
  currentUser={id:username,email:username};
  sessionStorage.setItem("watchMartUser",JSON.stringify(currentUser));
  document.getElementById("loginPage").style.display="none";
  document.getElementById("mainPage").style.display="block";
}

function logout(){
  currentUser=null;
  sessionStorage.removeItem("watchMartUser");
  cart=[];
  updateCart();
  document.getElementById("mainPage").style.display="none";
  document.getElementById("loginPage").style.display="flex";
}

function displayProducts(list){
 const c=document.getElementById("products"); c.innerHTML="";
 if(!list.length){c.innerHTML="<h3>No watches found 😕</h3>";return}
 list.forEach(p=>{
  c.innerHTML+=`<div class="product" onclick="showProductDetails(${p.id})">
    <div class="product-img"><img src="${p.image}" alt="${p.name}"></div>
    <h3>${p.name}</h3><div class="brand">Brand: ${p.brand}</div>
    <div class="rating">${p.rating}</div><div class="price">₹${p.price.toLocaleString("en-IN")}</div>
    <div class="delivery">🚚 Free Delivery</div>
    <button class="details-btn" onclick="event.stopPropagation();showProductDetails(${p.id})">👁️ View Details</button>
    <button class="add" onclick="event.stopPropagation();addToCart(${p.id})">🛒 Add to Cart</button>
    <button class="buy" onclick="event.stopPropagation();buyNow(${p.id})">⚡ Buy Now</button>
  </div>`;
 });
}

function addToCart(id){
 const p=products.find(x=>x.id===id),e=cart.find(x=>x.id===id);
 if(e)e.qty++;else cart.push({...p,qty:1});
 updateCart(); alert(p.name+" added to cart 🛒");
}
function buyNow(id){
 const e=cart.find(x=>x.id===id);
 if(!e){const p=products.find(x=>x.id===id);cart.push({...p,qty:1})}
 updateCart();openCheckout();
}
function updateCart(){document.getElementById("cartCount").innerText=cart.reduce((s,x)=>s+x.qty,0)}
function openCart(){renderCart();document.getElementById("cartModal").style.display="block"}
function renderCart(){
 const c=document.getElementById("cartItems");c.innerHTML="";
 if(!cart.length){c.innerHTML="<p>Your cart is empty 🛒</p>";document.getElementById("cartTotal").innerText="0";return}
 let total=0;
 cart.forEach((x,i)=>{
  total+=x.price*x.qty;
  c.innerHTML+=`<div class="cart-item"><div><b>⌚ ${x.name}</b><br>₹${x.price.toLocaleString("en-IN")}</div>
  <div class="qty"><button onclick="changeQty(${i},-1)">-</button> ${x.qty} <button onclick="changeQty(${i},1)">+</button></div>
  <button class="remove" onclick="removeItem(${i})">Remove</button></div>`;
 });
 document.getElementById("cartTotal").innerText=total.toLocaleString("en-IN");
}
function changeQty(i,v){cart[i].qty+=v;if(cart[i].qty<=0)cart.splice(i,1);updateCart();renderCart()}
function removeItem(i){cart.splice(i,1);updateCart();renderCart()}
function searchProducts(){
 const t=document.getElementById("searchInput").value.toLowerCase();
 displayProducts(products.filter(p=>p.name.toLowerCase().includes(t)||p.brand.toLowerCase().includes(t)||p.category.toLowerCase().includes(t)));
}
function filterProducts(cat){displayProducts(cat==="All"?products:products.filter(p=>p.category===cat))}
function checkout(){if(!cart.length){alert("Your cart is empty!");return}closeModal("cartModal");openCheckout()}
function openCheckout(){document.getElementById("checkoutModal").style.display="block"}
function showUPI(){document.getElementById("upiBox").style.display="block"}
function hideUPI(){document.getElementById("upiBox").style.display="none"}
async function copyMerchantUPI(){
 const upi="sabariraju2007s@okicici";
 try{await navigator.clipboard.writeText(upi);alert("UPI ID copied: "+upi)}
 catch(e){window.prompt("Copy this UPI ID:",upi)}
}

async function placeOrder(){
 if(!currentUser){alert("Please login first.");return}
 const name=document.getElementById("customerName").value.trim();
 const phone=document.getElementById("customerPhone").value.trim();
 const address=document.getElementById("customerAddress").value.trim();
 const pin=document.getElementById("customerPincode").value.trim();
 const date=document.getElementById("deliveryDate").value;
 const pay=document.querySelector('input[name="payment"]:checked');
 if(!name||!phone||!address||!pin||!date){alert("Please fill all customer details.");return}
 if(!/^[A-Za-z][A-Za-z .'-]{1,59}$/.test(name)){alert("Invalid Name! Name must contain letters only (spaces, dot, apostrophe and hyphen are allowed). Numbers are not allowed.");document.getElementById("customerName").focus();return}
 if(!/^[0-9]{10}$/.test(phone)){alert("Please enter a valid 10-digit phone number.");return}
 if(!/^[0-9]{6}$/.test(pin)){alert("Please enter a valid 6-digit pincode.");return}
 if(!pay){alert("Please select a payment method.");return}
 // Demo OTP: displayed locally for testing. A production site must send/verify this on a backend.
 const otp=String(Math.floor(100000+Math.random()*900000));
 alert("Demo OTP: "+otp+"\nIn a live store this code should be sent to your phone by a secure backend.");
 const entered=prompt("Enter the 6-digit OTP to confirm your order:");
 if(entered===null){alert("Order cancelled. OTP verification is required.");return}
 if(entered.trim()!==otp){alert("Invalid OTP. Order was not placed. Please try again.");return}
 const total=cart.reduce((sum,item)=>sum+Number(item.price)*item.qty,0);
 const orders=JSON.parse(localStorage.getItem('watchMartOrders')||'[]');
 const order={orderId:Date.now(),userId:currentUser.id,customer:{name,phone,address,pincode:pin,deliveryDate:date},items:cart.map(x=>({id:x.id,name:x.name,price:x.price,qty:x.qty})),paymentMethod:pay.value,total,status:'Order Placed',createdAt:new Date().toISOString(),rating:null};
 orders.unshift(order); localStorage.setItem('watchMartOrders',JSON.stringify(orders));
 document.getElementById("orderId").innerText="#"+order.orderId;
 document.getElementById("successName").innerText=name;
 document.getElementById("successDate").innerText=formatDate(date);
 document.getElementById("successPayment").innerText=pay.value==="UPI"?"UPI QR selected (payment not auto-verified)":"Cash on Delivery";
 document.getElementById("successTotal").innerText=total.toLocaleString("en-IN");
 closeModal("checkoutModal"); document.getElementById("successModal").style.display="block";
 cart=[]; updateCart();
}

function rateLatestOrder(){const orders=JSON.parse(localStorage.getItem('watchMartOrders')||'[]').filter(o=>o.userId===currentUser.id);if(orders.length)rateOrder(orders[0].orderId)}

function trackOrder(orderId){
 const orders=JSON.parse(localStorage.getItem('watchMartOrders')||'[]');
 const o=orders.find(x=>String(x.orderId)===String(orderId)&&x.userId===currentUser.id);
 if(!o){alert('Order not found.');return}
 const stages=['Order Placed','Processing','Shipped','Out for Delivery','Delivered'];
 const current=Math.max(0,stages.indexOf(o.status));
 alert('ORDER TRACKING\nOrder ID: #'+o.orderId+'\nCurrent status: '+o.status+'\n\nProgress:\n'+stages.map((s,i)=>(i<=current?'✓ ':'○ ')+s).join('\n')+'\n\nDemo tracking: status updates are not connected to a courier service.');
}
function rateOrder(orderId){
 const rating=prompt('How would you rate your WATCH MART order? Enter 1 to 5 stars:');
 if(rating===null)return;
 if(!/^[1-5]$/.test(rating.trim())){alert('Invalid rating. Please enter a number from 1 to 5.');return}
 const orders=JSON.parse(localStorage.getItem('watchMartOrders')||'[]');
 const o=orders.find(x=>String(x.orderId)===String(orderId)&&x.userId===currentUser.id);
 if(o){o.rating=Number(rating);localStorage.setItem('watchMartOrders',JSON.stringify(orders));alert('Thank you for rating us '+rating+'/5 stars!');}
}

async function showPlacedOrders(){
 if(!currentUser){alert('Please login first.');return;}
 const container=document.getElementById('placedOrdersList');
 document.getElementById('placedOrdersModal').style.display='block';
 const orders=JSON.parse(localStorage.getItem('watchMartOrders')||'[]').filter(o=>o.userId===currentUser.id);
 if(!orders.length){container.innerHTML='<p>No orders placed yet.</p>';return;}
 container.innerHTML=orders.map(o=>`<div class="cart-item" style="display:block;margin:12px 0;padding:14px;border:1px solid #ddd;border-radius:10px"><b>Order #${o.orderId}</b><p>Status: <b>${o.status}</b> · Date: ${formatDate(o.createdAt.slice(0,10))}</p><p>${o.items.map(i=>`${i.name} × ${i.qty}`).join(', ')}</p><p>Payment: ${o.paymentMethod==='COD'?'Cash on Delivery':'UPI QR (not auto-verified)'} · Total: ₹${Number(o.total).toLocaleString('en-IN')}</p><p>Deliver to: ${o.customer.name}, ${o.customer.address}, ${o.customer.pincode}</p><button type="button" class="place-order" onclick="trackOrder('${o.orderId}')">🚚 Track Order</button> <button type="button" class="place-order" onclick="rateOrder('${o.orderId}')">⭐ ${o.rating?('Rated '+o.rating+'/5'):'Rate Order'}</button></div>`).join('');
}

function formatDate(d){return new Date(d).toLocaleDateString("en-IN",{day:"2-digit",month:"long",year:"numeric"})}
function closeModal(id){document.getElementById(id).style.display="none"}


const savedUser=sessionStorage.getItem("watchMartUser");
if(savedUser){
 try{
  currentUser=JSON.parse(savedUser);
  document.getElementById("loginPage").style.display="none";
  document.getElementById("mainPage").style.display="block";
 }catch(e){}
}
loadProducts();
