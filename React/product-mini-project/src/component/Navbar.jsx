import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home"
import About from "../pages/About"
import Login from "../pages/Login"
import './navbar.css'
import ProductDetail from "../pages/ProductDetail";
import ProductForm from "./ProductForm";


const Navbar = () => {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </nav>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<ProductDetail/>}/>
        <Route path="/products/:id/edit" element={<ProductForm/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navbar;
