import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaSearch,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../features/products/productSlice";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  console.log("searchInputProduct", searchInput);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchInput, "inside handle search");
    if (searchInput.trim()) {
      dispatch(searchProduct(searchInput));
      setSearchInput("")
    }
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200 fixed w-full z-50 top-0 left-0 shadow-sm">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="http://cookiesbakery.nop-station.com/images/thumbs/0000107_logo.png"
              alt="Logo"
              className="w-[165px] h-[62px] object-contain"
            />
          </Link>

          {/* Search bar (visible in md and up) */}
          <form
            className="hidden md:flex items-center relative w-1/3"
            onSubmit={handleSearch}
          >
            <FaSearch className="absolute left-3 text-gray-500" type="submit" />
            <input
              type="text"
              placeholder="Search for cakes, pastries..."
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button></button>
          </form>

          {/* Right Section (Cart, Fav, Profile) */}
          <div className="flex items-center space-x-5 md:order-2">
            {/* Favourites */}
            <Link
              to="/favorites"
              className="relative text-gray-700 hover:text-pink-600"
            >
              <FaHeart className="text-xl" />
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-1.5 rounded-full"></span>
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-pink-600"
            >
              <FaShoppingCart className="text-xl" />
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-1.5 rounded-full">
                {cartItems.length}
              </span>
            </Link>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center text-gray-700 hover:text-pink-600"
              >
                <FaUserCircle className="text-2xl" />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <div className="px-4 py-3 border-b border-gray-200">
                    <p className="font-medium text-gray-800">Pragya Kushwah</p>
                    <p className="text-sm text-gray-500 truncate">
                      user@bakery.com
                    </p>
                  </div>
                  <ul className="text-sm text-gray-600">
                    <li>
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/orders"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        Orders
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => setIsProfileOpen(false)}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Hamburger for mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-pink-600"
            >
              <FaBars className="text-2xl" />
            </button>
          </div>

          {/* Nav Links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 text-sm font-medium">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-pink-600 md:text-gray-800 hover:text-pink-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-gray-700 hover:text-pink-600"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/new_products"
                  className="block py-2 px-3 text-gray-700 hover:text-pink-600"
                >
                  New Products
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="block py-2 px-3 text-gray-700 hover:text-pink-600"
                >
                  {isAuthenticated ? "logout" : "login"}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-3 text-gray-700 hover:text-pink-600"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Search bar (mobile only) */}
            <div className="relative mt-3 md:hidden">
              <FaSearch className="absolute left-3 top-3 text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
