import React from 'react';
import { NavLink } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const linkClass =
  'px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 py-3 bg-gray-100 dark:bg-gray-800">
      {/* left links */}
      <div className="space-x-3">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/marketplace" className={linkClass}>
          Marketplace
        </NavLink>
        <NavLink to="/wishlist" className={linkClass}>
          Wishlist
        </NavLink>
        <NavLink to="/profile" className={linkClass}>
          Profile
        </NavLink>
      </div>

      {/* right links */}
      <div className="space-x-3 flex items-center">
        <NavLink to="/login" className={linkClass}>
          Login
        </NavLink>
        <NavLink to="/register" className={linkClass}>
          Register
        </NavLink>
        <DarkModeToggle />
      </div>
    </nav>
  );
}
