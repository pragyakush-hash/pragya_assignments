import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="min-h-12 bg-white flex justify-around p-3">
        <h2>MOVIESS..</h2>
        <Link to="/login">Login</Link>
        <Link to="/signup">SignUp</Link>
        <Link to="/">Movies</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </>
  );
};

export default Navbar;
