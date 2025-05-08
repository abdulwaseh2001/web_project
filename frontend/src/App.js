import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Marketplace from './pages/Marketplace';
import NotFound from './pages/NotFound';
import Wishlist from './pages/Wishlist';

import AdminLayout from './components/Admin/AdminLayout';
import Dashboard from './components/Admin/Dashboard';
import UserList from './components/Admin/UserList';
import UserEdit from './components/Admin/UserEdit';
import AssetList from './components/Admin/AssetList';
import AssetEdit from './components/Admin/AssetEdit';
import Settings from './components/Admin/Settings';

// Layout for public pages with Navbar
const PublicLayout = () => (
  <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
    <Navbar />
    <Outlet />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>

        {/* Public Site Pages */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Admin Panel (no Navbar) */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<UserList />} />
          <Route path="users/:id/edit" element={<UserEdit />} />
          <Route path="content" element={<AssetList />} />
          <Route path="content/new" element={<AssetEdit />} />
          <Route path="content/:id/edit" element={<AssetEdit />} />
          <Route path="settings" element={<Settings />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
