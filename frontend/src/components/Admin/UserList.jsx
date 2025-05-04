import { useEffect, useState } from 'react';
import api from '../../api/api';
import './user-list.css';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/admin/users').then(res => setUsers(res.data));
  }, []);

  const handleRoleChange = (userId, currentRole) => {
    const newRole = currentRole === 'admin' ? 'user' : 'admin';
    api.post('/admin/users/role', { userId, role: newRole })
      .then(() => window.location.reload());
  };

  const handleBlockToggle = (userId, isBlocked) => {
    api.post('/admin/users/block', { userId, block: !isBlocked })
      .then(() => window.location.reload());
  };

  return (
    <div className="user-list">
      <h2>Manage Users</h2>
      <table>
        <thead>
          <tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u._id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>{u.isBlocked ? 'Blocked' : 'Active'}</td>
              <td>
                <button onClick={() => handleRoleChange(u._id, u.role)}>
                  {u.role === 'admin' ? 'Demote' : 'Promote'}
                </button>
                <button onClick={() => handleBlockToggle(u._id, u.isBlocked)}>
                  {u.isBlocked ? 'Unblock' : 'Block'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
