import { useState } from 'react';
import './user-edit.css';

export default function UserEdit({ user, onSave }) {
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');

  const handleSubmit = e => {
    e.preventDefault();
    onSave({ ...user, name, email });
  };

  return (
    <form className="user-edit-form" onSubmit={handleSubmit}>
      <h3>Edit User</h3>
      <label>Name: <input value={name} onChange={e => setName(e.target.value)} /></label>
      <label>Email: <input value={email} onChange={e => setEmail(e.target.value)} /></label>
      <button type="submit">Save</button>
    </form>
  );
}
