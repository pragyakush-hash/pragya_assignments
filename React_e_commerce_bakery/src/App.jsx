import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NewProductsPage from "./pages/NewProductsPage";
import LoginPage from "./features/auth/LoginPage";
import RegisterPage from "./features/auth/RegisterPage";
import EmailVerification from "./features/auth/EmailVerification";
import Footer from "./components/Footer";
import Favorites from "./pages/Favorites";
import CartPage from "./features/cart/CartPage";
import ProductDetail from "./features/products/ProductDetail";
import OrderSuccess from "./features/orders/OrderSuccess";
import OrderHistory from "./features/orders/OrderHistory";
// import SellerDashboard from "./features/seller/SellerDashboard";
import AdminDashboard from "./features/admin/AdminDashboard";
import SellerDashboard from "./features/seller/SellerDashboard";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/new_products" element={<NewProductsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/email_verification" element={<EmailVerification />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/order-history" element={<OrderHistory />} />

          {/* seller routes  */}
          <Route path="/seller" element={<SellerDashboard />} />

          {/* admin routes */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
