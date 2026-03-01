// server.js - Restaurant App Backend
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// ==================== MENU DATA WITH BEAUTIFUL IMAGES ====================
const menuItems = [
  {
    id: 1,
    name: "Wagyu Beef Burger",
    price: 24.99,
    category: "Burgers",
    description: "Premium Japanese Wagyu beef, caramelized onions, truffle aioli, brioche bun",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
    rating: 4.9,
    prepTime: "20 min",
    spicy: false,
    vegetarian: false
  },
  {
    id: 2,
    name: "Margherita Pizza",
    price: 18.99,
    category: "Pizza",
    description: "Fresh mozzarella, basil, tomato sauce, extra virgin olive oil",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400",
    rating: 4.8,
    prepTime: "25 min",
    spicy: false,
    vegetarian: true
  },
  {
    id: 3,
    name: "Lobster Risotto",
    price: 32.99,
    category: "Seafood",
    description: "Creamy arborio rice, Maine lobster, parmesan, saffron",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400",
    rating: 4.9,
    prepTime: "30 min",
    spicy: false,
    vegetarian: false
  },
  {
    id: 4,
    name: "Caesar Salad",
    price: 14.99,
    category: "Salads",
    description: "Crisp romaine, parmesan crisps, homemade dressing, croutons",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400",
    rating: 4.7,
    prepTime: "10 min",
    spicy: false,
    vegetarian: true
  },
  {
    id: 5,
    name: "BBQ Ribs",
    price: 28.99,
    category: "Grill",
    description: "Slow-cooked pork ribs, house BBQ sauce, coleslaw, fries",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400",
    rating: 4.8,
    prepTime: "35 min",
    spicy: true,
    vegetarian: false
  },
  {
    id: 6,
    name: "Sushi Platter",
    price: 36.99,
    category: "Japanese",
    description: "12 pieces assorted sushi, salmon, tuna, yellowtail, avocado roll",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400",
    rating: 4.9,
    prepTime: "25 min",
    spicy: false,
    vegetarian: false
  },
  {
    id: 7,
    name: "Chocolate Lava Cake",
    price: 9.99,
    category: "Desserts",
    description: "Warm chocolate cake with molten center, vanilla ice cream",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400",
    rating: 5.0,
    prepTime: "15 min",
    spicy: false,
    vegetarian: true
  },
  {
    id: 8,
    name: "Mango Sticky Rice",
    price: 8.99,
    category: "Desserts",
    description: "Sweet coconut sticky rice, fresh mango, sesame seeds",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400",
    rating: 4.8,
    prepTime: "10 min",
    spicy: false,
    vegetarian: true
  },
  {
    id: 9,
    name: "Spicy Ramen",
    price: 16.99,
    category: "Noodles",
    description: "Tonkotsu broth, chashu pork, soft-boiled egg, nori, bamboo shoots",
    image: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=400",
    rating: 4.8,
    prepTime: "20 min",
    spicy: true,
    vegetarian: false
  },
  {
    id: 10,
    name: "Fresh Oysters",
    price: 22.99,
    category: "Seafood",
    description: "Half dozen fresh oysters, mignonette, lemon, cocktail sauce",
    image: "https://images.unsplash.com/photo-1590511796488-77091962f854?w=400",
    rating: 4.7,
    prepTime: "10 min",
    spicy: false,
    vegetarian: false
  }
];

// ==================== USERS DATA ====================
const users = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    password: "123456",
    phone: "+1 234-567-8901",
    address: "123 Main St, New York, NY",
    favorites: [1, 3, 7],
    orders: [],
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    password: "123456",
    phone: "+1 234-567-8902",
    address: "456 Oak Ave, Los Angeles, CA",
    favorites: [2, 5, 8],
    orders: [],
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg"
  }
];

// ==================== ORDERS DATA ====================
let orders = [
  {
    id: 1001,
    userId: 1,
    items: [
      { id: 1, name: "Wagyu Beef Burger", quantity: 2, price: 24.99 },
      { id: 7, name: "Chocolate Lava Cake", quantity: 1, price: 9.99 }
    ],
    total: 59.97,
    status: "delivered",
    date: "2026-02-28",
    address: "123 Main St, New York, NY"
  }
];

// ==================== API ENDPOINTS ====================

// Home route
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Restaurant API</title></head>
      <body style="font-family: Arial; max-width: 800px; margin: 40px auto; background: #f5f5f5; padding: 20px;">
        <h1 style="color: #FF6B6B;">🍽️ Restaurant API Server</h1>
        <p>Server is running! Available endpoints:</p>
        <ul>
          <li><strong>GET /api/menu</strong> - View all menu items</li>
          <li><strong>GET /api/menu/category/:category</strong> - Filter by category</li>
          <li><strong>POST /api/login</strong> - User login</li>
          <li><strong>POST /api/register</strong> - User registration</li>
          <li><strong>POST /api/orders</strong> - Place an order</li>
          <li><strong>GET /api/orders/user/:userId</strong> - View user orders</li>
        </ul>
        <p><a href="/api/menu" style="color: #FF6B6B;">Click here to view menu →</a></p>
      </body>
    </html>
  `);
});

// GET all menu items (Q1)
app.get('/api/menu', (req, res) => {
  console.log('📋 Menu requested at:', new Date().toLocaleTimeString());
  res.json({
    success: true,
    count: menuItems.length,
    menu: menuItems
  });
});

// GET menu by category
app.get('/api/menu/category/:category', (req, res) => {
  const category = req.params.category;
  const filtered = menuItems.filter(item => 
    item.category.toLowerCase() === category.toLowerCase()
  );
  res.json({
    success: true,
    count: filtered.length,
    menu: filtered
  });
});

// GET single menu item
app.get('/api/menu/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = menuItems.find(item => item.id === id);
  if (item) {
    res.json({ success: true, item });
  } else {
    res.status(404).json({ success: false, message: 'Item not found' });
  }
});

// User Login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    console.log(`✅ User logged in: ${user.name}`);
    res.json({
      success: true,
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        favorites: user.favorites,
        profilePic: user.profilePic
      }
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid email or password'
    });
  }
});

// User Registration
app.post('/api/register', (req, res) => {
  const { name, email, password, phone, address } = req.body;
  
  // Check if user exists
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: 'User already exists'
    });
  }
  
  // Create new user
  const newUser = {
    id: users.length + 1,
    name,
    email,
    password,
    phone: phone || '',
    address: address || '',
    favorites: [],
    orders: [],
    profilePic: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${users.length + 10}.jpg`
  };
  
  users.push(newUser);
  
  console.log(`🎉 New user registered: ${name}`);
  res.status(201).json({
    success: true,
    message: 'Registration successful',
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone,
      address: newUser.address,
      profilePic: newUser.profilePic
    }
  });
});

// Place Order (Q3 - Order Logger)
app.post('/api/orders', (req, res) => {
  const orderData = req.body;
  
  // Generate order ID
  const newId = Math.max(...orders.map(o => o.id), 1000) + 1;
  
  const newOrder = {
    id: newId,
    ...orderData,
    date: new Date().toISOString().split('T')[0],
    status: 'confirmed'
  };
  
  orders.push(newOrder);
  
  // Q3: LOG ORDER TO CONSOLE
  console.log('\n' + '='.repeat(50));
  console.log('📦 NEW ORDER RECEIVED');
  console.log('='.repeat(50));
  console.log(`Order ID: ${newId}`);
  console.log(`Customer: ${orderData.customerName}`);
  console.log(`Items:`);
  
  orderData.items.forEach((item, index) => {
    console.log(`  ${index+1}. ${item.name} x${item.quantity} = $${(item.price * item.quantity).toFixed(2)}`);
  });
  
  console.log('-'.repeat(30));
  console.log(`Subtotal: $${orderData.subtotal}`);
  console.log(`Tax: $${orderData.tax}`);
  console.log(`Total: $${orderData.total}`);
  console.log(`Delivery Address: ${orderData.address}`);
  console.log('='.repeat(50) + '\n');
  
  res.status(201).json({
    success: true,
    message: 'Order placed successfully',
    orderId: newId,
    order: newOrder
  });
});

// Get user orders
app.get('/api/orders/user/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const userOrders = orders.filter(o => o.userId === userId);
  res.json({
    success: true,
    count: userOrders.length,
    orders: userOrders
  });
});

// Add to favorites
app.post('/api/favorites/add', (req, res) => {
  const { userId, itemId } = req.body;
  
  const user = users.find(u => u.id === userId);
  if (user) {
    if (!user.favorites.includes(itemId)) {
      user.favorites.push(itemId);
    }
    res.json({ success: true, favorites: user.favorites });
  } else {
    res.status(404).json({ success: false, message: 'User not found' });
  }
});

// Remove from favorites
app.post('/api/favorites/remove', (req, res) => {
  const { userId, itemId } = req.body;
  
  const user = users.find(u => u.id === userId);
  if (user) {
    user.favorites = user.favorites.filter(id => id !== itemId);
    res.json({ success: true, favorites: user.favorites });
  } else {
    res.status(404).json({ success: false, message: 'User not found' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log('\n' + '='.repeat(50));
  console.log('🍽️  RESTAURANT SERVER RUNNING');
  console.log('='.repeat(50));
  console.log(`📍 Server: http://localhost:${PORT}`);
  console.log(`📍 Menu: http://localhost:${PORT}/api/menu`);
  console.log(`📍 Login: POST http://localhost:${PORT}/api/login`);
  console.log(`📍 Register: POST http://localhost:${PORT}/api/register`);
  console.log('='.repeat(50) + '\n');
});