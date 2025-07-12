import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MyBlog
        </Link>
        <nav className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/categories" className="text-gray-700 hover:text-blue-600">
            Categories
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-blue-600">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
