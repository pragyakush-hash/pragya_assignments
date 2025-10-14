import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import "./navbar.css";
import ProductDetail from "../pages/ProductDetail";
import ProductForm from "./ProductForm";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { logout , isAuthenticated } = useContext(AuthContext);
  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <Link to="/login">Login</Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <button onClick={()=>logout()}>{isAuthenticated ? "Logout":"Login"}</button>
      </nav>
    </>
  );
};

export default Navbar;
