import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import ProductForm from "./component/ProductForm";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./privateroute/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      {/* Routes */}
      <AuthProvider>
      <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/products/:id/edit" element={<ProductForm />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
