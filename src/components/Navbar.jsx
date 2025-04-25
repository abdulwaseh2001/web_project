import react from 'react'
import { link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'

export default function Navbar()
{
    return(
        <nav classname ="flex justify-between p-4 bg-gray-100 dark:bg-gray-800">
            <div classname = "space-x-4">
                <Link to="/">Home</Link>
                <Link to="/marketplace">Marketplace</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/wishlist">Wishlist</Link>

            </div>
            <div classname = "space-x-4">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <DarkModeToggle />
            </div>
        </nav>


    );









}