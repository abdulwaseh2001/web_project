import { NavLink, Outlet } from 'react-router-dom';
import './admin-layout.css';

export default function AdminLayout() {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <NavLink to="dashboard">Dashboard</NavLink>
        <NavLink to="users">Users</NavLink>
        <NavLink to="content">Assets</NavLink>
        <NavLink to="settings">Settings</NavLink>
      </aside>
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}
