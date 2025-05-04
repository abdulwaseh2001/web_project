import { useEffect, useState } from 'react';
import api from '../../api/api';
import './dashboard.css';

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalAssets: 0,
    totalOrders: 0,
    revenue: 0
  });

  useEffect(() => {
    api.get('/admin/stats')
      .then(res => setStats(res.data))
      .catch(err => console.error('Failed to load stats', err));
  }, []);

  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2>Total Users</h2>
          <p>{stats.totalUsers}</p>
        </div>
        <div className="dashboard-card">
          <h2>Total Assets</h2>
          <p>{stats.totalAssets}</p>
        </div>
        <div className="dashboard-card">
          <h2>Total Orders</h2>
          <p>{stats.totalOrders}</p>
        </div>
        <div className="dashboard-card">
          <h2>Total Revenue</h2>
          <p>${stats.revenue}</p>
        </div>
      </div>
    </div>
  );
}
