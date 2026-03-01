# A2
```markdown
# Restaurant App - Flavor

A beautiful restaurant mobile app built with React Native and Expo.

## 📋 Assignment 2 Requirements

### 1. Single Server File
- **File:** `server.js`
- Contains both the server code AND all menu data
- Menu includes 10 items with names, prices, categories, and images

### 2. Working Links (Catalog in text format)

Open these URLs in your browser:

**Main Catalog:**
```
http://192.168.0.101:3000/
```
Shows API documentation with all available endpoints

**Menu JSON Data:**
```
http://192.168.0.101:3000/api/menu
```
Shows all menu items with details

### 3. How to Run the Server

```bash
node server.js
```

Server will start at: `http://localhost:3000`

---

## 🚀 Quick Start

### Install dependencies
```bash
npm install
npm install express
```

### Start the server
```bash
node server.js
```

### Find your IP address
```bash
ipconfig
```
Look for `IPv4 Address` (like 192.168.0.101)

### Update IP in app.js
Change:
```javascript
const SERVER_URL = 'http://localhost:3000';
```
to
```javascript
const SERVER_URL = 'http://YOUR_IP_ADDRESS:3000';
```

### Start the app
```bash
npx expo start
```
Scan QR code with Expo Go app

## 📱 App Features

- User Login & Registration
- Browse Menu with beautiful images
- Filter by Categories
- Search Dishes
- Add to Cart
- Place Orders
- View Profile

## 👤 Demo Accounts

```
Email: john@example.com
Password: 123456

Email: sarah@example.com
Password: 123456
```

## 📁 Project Files

- `server.js` - Backend server with menu data (single file)
- `app.js` - Main React Native app
- `app.json` - Expo configuration
- `README.md` - This file

## 🛠️ Technologies

- React Native
- Expo
- Node.js
- Express

## 📝 Notes

- Make sure phone and computer are on same WiFi
- Update IP address in app.js before running
- Server must be running before using the app
- All menu data is inside server.js (single file requirement)
```
