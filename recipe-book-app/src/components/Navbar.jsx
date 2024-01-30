import React from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <img src={logo} alt="Logo" className="h-8" />
      <h1 className="text-xl">Recipe Book</h1>
    </nav>
  );
}

export default Navbar;