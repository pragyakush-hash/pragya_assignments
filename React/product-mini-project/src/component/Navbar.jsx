import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { logout , state } = useContext(AuthContext);
  console.log(state?.isAuthenticated,"isauth")
  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <Link to="/login">Login</Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <button onClick={()=>logout()} className="btn-navbar">{state?.isAuthenticated ? "Logout":"Login"}</button>
      </nav>
    </>
  );
};

export default Navbar;
