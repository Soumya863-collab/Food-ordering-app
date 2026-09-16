# 🍽️ Roots & Recipes – Food Ordering App

## 📌 Project Overview

**Roots & Recipes** is a responsive single-restaurant food ordering web application built using React and Bootstrap.

The application allows users to browse food items, search and filter the menu, add food items to a cart, manage quantities, proceed to checkout, select a payment method, and place an order.

This project is designed as a frontend food-ordering application inspired by modern food delivery platforms, but it focuses on **one restaurant only**.

---

## ✨ Features

* 🏠 Responsive home page
* 🍽️ Single restaurant food menu
* 🔍 Search food items by name
* 📂 Filter food items by category
* 🟢 Veg / 🔴 Non-Veg filtering
* 🛒 Add food items to cart
* ➕ Increase item quantity
* ➖ Decrease item quantity
* 🗑️ Remove items from cart
* 💰 Automatic subtotal calculation
* 🚚 Delivery fee calculation
* 🧾 Tax calculation
* 💳 Payment method selection
* 📦 Checkout form
* ✅ Order success confirmation
* 📱 Responsive design for desktop and mobile
* 📄 About and Contact sections

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Bootstrap 5

### Development Tools

* Vite
* Visual Studio Code
* Git
* GitHub

### Data

* Static JavaScript food data
* No backend API is currently connected
* No database is currently used

---

## 📁 Project Structure

```text
FoodOrder_App/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Categories.jsx
│   │   ├── FoodCard.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   └── Footer.jsx
│   │
│   ├── data/
│   │   └── foodData.js
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Setup and Installation

### 1. Clone the repository

```bash
git clone https://github.com/Soumya863-collab/Food-ordering-app.git
```

### 2. Navigate to the project folder

```bash
cd Food-ordering-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install Bootstrap

```bash
npm install bootstrap
```

### 5. Start the development server

```bash
npm run dev
```

### 6. Open the application

After running the development server, Vite will provide a local URL.

Usually:

```text
http://localhost:5173/
```

Open the URL in your browser.

---

## 🔐 Environment Variables

Currently, this project does **not require any environment variables** because it does not use a backend API, database, or authentication service.

If environment variables are added in the future, they can be stored in a `.env` file.

Example:

```env
VITE_API_URL=your_api_url
```

**Note:** Do not upload sensitive API keys, passwords, or credentials to GitHub.

---

## 🌐 API Notes

The current version does **not use an external API**.

Food information such as:

* Food name
* Category
* Price
* Food type
* Description
* Image

is stored in:

```text
src/data/foodData.js
```

The React application reads this data and provides search and filtering functionality.

---

## 🗄️ Database Notes

No database is currently used.

The cart information is maintained using **React state** while the application is running.

Therefore:

* Cart data is temporary.
* Refreshing the page clears the cart.
* Orders are not permanently stored.
* There is no user authentication.
* Payment options are currently UI selections only.

A backend and database such as **Flask + MySQL** can be integrated in a future version.

---

## 🛒 Application Flow

```text
Home
  ↓
Browse Menu
  ↓
Search / Filter Food
  ↓
Add Food to Cart
  ↓
Manage Cart
  ↓
Checkout
  ↓
Enter Delivery Details
  ↓
Select Payment Method
  ↓
Place Order
  ↓
Order Success
``
```
