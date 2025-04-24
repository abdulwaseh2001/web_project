import React from 'react';
import { NavLink } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const navLinkStyle = ({ isActive }) =>
  `px-3 py-1 rounded transition hover:bg-gray-200 dark:hover:bg-gray-700 ${
    isActive ? 'font-semibold text-blue-600 dark:text-blue-400' : ''
  }`;

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-gray-100 dark:bg-gray-800 shadow-md sticky top-0 z-50">
      {/* Left nav */}
      <div className="flex space-x-4">
        <NavLink to="/" className={navLinkStyle}>Home</NavLink>
        <NavLink to="/marketplace" className={navLinkStyle}>Marketplace</NavLink>
        <NavLink to="/wishlist" className={navLinkStyle}>Wishlist</NavLink>
        <NavLink to="/profile" className={navLinkStyle}>Profile</NavLink>
      </div>

      {/* Right nav */}
      <div className="flex items-center space-x-4">
        <NavLink to="/login" className={navLinkStyle}>Login</NavLink>
        <NavLink to="/register" className={navLinkStyle}>Register</NavLink>
        <DarkModeToggle />
      </div>
    </nav>
  );
}