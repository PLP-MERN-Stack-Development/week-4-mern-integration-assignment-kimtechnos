import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-10 border-t text-gray-600">
      <p>&copy; {new Date().getFullYear()} MyBlog. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
