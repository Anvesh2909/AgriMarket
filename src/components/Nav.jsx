import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [hamBtn, setHambtn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Function to scroll smoothly to different sections
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setHambtn(false); // Close menu after scroll
  };

  // Function to handle login action
  const handleLogin = () => {
    // Simulate a successful login
    setIsLoggedIn(true);
    navigate('/login'); // Navigate to the login page
  };

  return (
    <nav className="w-full h-16 flex items-center justify-between px-5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Brand and Logo */}
      <div className="flex items-center">
        <Link to="/">
          <span
            className="text-2xl font-bold cursor-pointer text-gray-900"
            onClick={() => handleScrollToSection('home')}
          >
            Agri<span className="text-green-500">Market</span>🌾
          </span>
        </Link>
      </div>

      {/* Centered Navigation Links for Desktop */}
      <div className="hidden md:flex flex-grow justify-center">
        <div className="flex gap-10">
          <Link to="/products">
            <span className="cursor-pointer text-gray-900 hover:text-green-500 font-semibold transition">
              Products
            </span>
          </Link>
          <Link to="/favourites">
            <span className="cursor-pointer text-gray-900 hover:text-green-500 font-semibold transition">
              Favourites
            </span>
          </Link>
          <Link to="/orders">
            <span className="cursor-pointer text-gray-900 hover:text-green-500 font-semibold transition">
              Orders
            </span>
          </Link>
          <span
            onClick={() => handleScrollToSection('about')}
            className="cursor-pointer text-gray-900 hover:text-green-500 font-semibold transition"
          >
            About Us
          </span>
        </div>
      </div>

      {/* Login Button */}
      <div className="flex items-center">
        {/* Login button for both mobile and desktop */}
        <Link to="/login">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            onClick={handleLogin}
          >
            {isLoggedIn ? 'Logged In' : 'Login'}
          </button>
        </Link>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            className="text-gray-900 focus:outline-none"
            onClick={() => setHambtn(!hamBtn)}
          >
            {/* Icon to toggle */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {hamBtn ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {hamBtn && (
        <div className="absolute top-16 left-0 w-full bg-white z-10 shadow-md">
          <div className="flex flex-col items-center p-4 text-gray-900">
            <Link to="/products">
              <span className="cursor-pointer hover:text-green-500 font-semibold py-2 transition">
                Products
              </span>
            </Link>
            <Link to="/orders">
              <span className="cursor-pointer hover:text-green-500 font-semibold py-2 transition">
                Orders
              </span>
            </Link>
            <Link to="/favourites">
              <span className="cursor-pointer hover:text-green-500 font-semibold py-2 transition">
                Favourites
              </span>
            </Link>
            <span
              onClick={() => handleScrollToSection('about')}
              className="cursor-pointer hover:text-green-500 font-semibold py-2 transition"
            >
              About Us
            </span>

            <Link to="/login">
              <button
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                onClick={handleLogin}
              >
                {isLoggedIn ? 'Logged In' : 'Login'}
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
