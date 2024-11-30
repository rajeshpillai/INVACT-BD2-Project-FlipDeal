const express = require('express');
const { resolve } = require('path');
let cors = require('cors');

const port = 3010;

const app = express();

app.use(express.static('static'));
app.use(cors());

let cart = [
  { productId: 1, name: 'Laptop', price: 50000, quantity: 1 },
  { productId: 2, name: 'Mobile', price: 20000, quantity: 2 }
];

let products = [
  {
    id: 1,
    name: 'Xiaomi iPhone 12',
    brand: 'Xiaomi',
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 2,
    name: 'Oppo Mi 10',
    brand: 'Xiaomi',
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 3,
    name: 'Samsung Mi 10',
    brand: 'Oppo',
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 4,
    name: 'Apple Find X2',
    brand: 'Samsung',
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 48,
  },
  {
    id: 5,
    name: 'Oppo Mi 11',
    brand: 'Xiaomi',
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 6,
    name: 'OnePlus Find X3',
    brand: 'Apple',
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 7,
    name: 'Apple Pixel 5',
    brand: 'Apple',
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 8,
    name: 'Google Mi 10',
    brand: 'Oppo',
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 108,
  },
  {
    id: 9,
    name: 'Oppo Mi 11',
    brand: 'Samsung',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 10,
    name: 'Xiaomi Mi 10',
    brand: 'Oppo',
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 11,
    name: 'OnePlus Pixel 5',
    brand: 'Apple',
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 12,
    name: 'Xiaomi OnePlus 8',
    brand: 'Xiaomi',
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: 'Android',
    camera: 48,
  },
  {
    id: 13,
    name: 'Xiaomi Pixel 6',
    brand: 'Oppo',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 14,
    name: 'Samsung Find X2',
    brand: 'Oppo',
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: 'Android',
    camera: 48,
  },
  {
    id: 15,
    name: 'Google OnePlus 8',
    brand: 'Apple',
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 16,
    name: 'OnePlus iPhone 12',
    brand: 'OnePlus',
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 17,
    name: 'Google Mi 11',
    brand: 'Oppo',
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 18,
    name: 'Google OnePlus 9',
    brand: 'Apple',
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 64,
  },
  {
    id: 19,
    name: 'Oppo Galaxy S22',
    brand: 'Samsung',
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: 'Android',
    camera: 12,
  },
  {
    id: 20,
    name: 'Apple Pixel 5',
    brand: 'Oppo',
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: 'Android',
    camera: 108,
  },
];

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

// Endpoint to get all products
app.get('/products', (req, res) => {
  res.json({ products });
});

// Endpoint to sort by popularity (ratings high to low)
app.get('/products/sort/popularity', (req, res) => {
  const sortedProducts = [...products].sort((a, b) => b.rating - a.rating);
  res.json({ products: sortedProducts });
});

// Endpoint to sort by price high-to-low
app.get('/products/sort/price-high-to-low', (req, res) => {
  const sortedProducts = [...products].sort((a, b) => b.price - a.price);
  res.json({ products: sortedProducts });
});

// Endpoint to sort by price low-to-high
app.get('/products/sort/price-low-to-high', (req, res) => {
  const sortedProducts = [...products].sort((a, b) => a.price - b.price);
  res.json({ products: sortedProducts });
});

// Endpoint to filter by RAM
app.get('/products/filter/ram', (req, res) => {
  const { ram } = req.query;
  const filteredProducts = products.filter(
    (product) => product.ram === parseInt(ram)
  );
  res.json({ products: filteredProducts });
});

// Endpoint to filter by ROM
app.get('/products/filter/rom', (req, res) => {
  const { rom } = req.query;
  const filteredProducts = products.filter(
    (product) => product.rom === parseInt(rom)
  );
  res.json({ products: filteredProducts });
});

// Endpoint to filter by brand
app.get('/products/filter/brand', (req, res) => {
  const { brand } = req.query;
  const filteredProducts = products.filter(
    (product) => product.brand.toLowerCase() === brand.toLowerCase()
  );
  res.json({ products: filteredProducts });
});

// Endpoint to filter by OS
app.get('/products/filter/os', (req, res) => {
  const { os } = req.query;
  const filteredProducts = products.filter(
    (product) => product.os.toLowerCase() === os.toLowerCase()
  );
  res.json({ products: filteredProducts });
});

// Endpoint to filter by price (less than or equal to the specified price)
// NOTE: I have assumed price to be of int based on data as no explicit requirements have been given in this regard.
// If it contains decimal then parseFloat or other methods can be used.
app.get('/products/filter/price', (req, res) => {
  const { price } = req.query;
  const filteredProducts = products.filter(
    (product) => product.price <= parseInt(price)
  );
  res.json({ products: filteredProducts });
});

// NEW CHANGES:
// Endpoint: Add an item to the cart
app.get('/cart/add', (req, res) => {
  const { productId, name, price, quantity } = req.query;

  if (!productId || !name || !price || !quantity) {
      return res.status(400).json({ error: 'Missing required parameters' });
  }

  const newItem = {
      productId: parseInt(productId),
      name,
      price: parseFloat(price),
      quantity: parseInt(quantity)
  };

  cart.push(newItem);
  res.json({ cartItems: cart });
});

// Endpoint: Edit quantity of an item in the cart
app.get('/cart/edit', (req, res) => {
  const { productId, quantity } = req.query;

  if (!productId || !quantity) {
      return res.status(400).json({ error: 'Missing required parameters' });
  }

  const updatedQuantity = parseInt(quantity);
  const product = cart.find(item => item.productId === parseInt(productId));

  if (product) {
      product.quantity = updatedQuantity;
      res.json({ cartItems: cart });
  } else {
      res.status(404).json({ error: 'Product not found' });
  }
});

// Endpoint: Delete an item from the cart
app.get('/cart/delete', (req, res) => {
  const { productId } = req.query;

  if (!productId) {
      return res.status(400).json({ error: 'Missing required parameter: productId' });
  }

  cart = cart.filter(item => item.productId !== parseInt(productId));
  res.json({ cartItems: cart });
});

// Endpoint: Read items in the cart
app.get('/cart', (req, res) => {
  res.json({ cartItems: cart });
});

// Endpoint: Calculate total quantity of items in the cart
app.get('/cart/total-quantity', (req, res) => {
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  res.json({ totalQuantity });
});

// Endpoint: Calculate total price of items in the cart
app.get('/cart/total-price', (req, res) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  res.json({ totalPrice });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
