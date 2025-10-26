import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="min-h-12 bg-white flex justify-around p-3">
      <h1 className="text-3xl font-bold  text-center">🎬 Movie List</h1>
        <Link to="/login">Login</Link>
        <Link to="/signup">SignUp</Link>
        <Link to="/">Movies</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/movie_list">Movie-List</Link>
      </nav>
    </>
  );
};

export default Navbar;
