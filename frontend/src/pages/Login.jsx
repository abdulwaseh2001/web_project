import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import './Login.css';

export default function Login() {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const navigate                = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      api.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
      alert('Login successful!');
      navigate('/profile');
    } catch (err) {
      alert(err.response?.data?.msg || 'Login error');
    }
  };

  return (
    <div className="login-container">
      <p className="subtext">
        Already part of The Indie Coalition? Sign in to continue collaborating.
      </p>
      <h2 className="login-heading">Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="login-input"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="login-input"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
