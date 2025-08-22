# 🛒 Next.js Product App

A simple product management web application built with **Next.js**.  
Currently, it supports **user registration** and **product adding** features.

---

## 🚀 Features
- User registration with authentication  
- Add new products with image, title, description, and price  
- Responsive design for mobile and desktop  

---

## 📌 Routes Summary

| Route | Description |
|-------|-------------|
| `/` | Homepage (product list / banner) |
| `/signup` | User registration page |
| `/login` | User login page |
| `/dashboard/add` | Add new product form |
| `/products/[id]` | Product details page |

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   
   ```bash
   git clone https://github.com/your-username/next-product-app.git
   cd next-product-app
   npm install
   ```

2. **Setup environment variables**
   ```bash
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   MONGODB_URI=
   NEXTAUTH_SECRET=
   NEXTAUTH_URL=
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```



