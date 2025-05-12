// frontend/src/pages/Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import "./Register.css";

export default function Register() {
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [password, setPassword] = useState("");
  const navigate              = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await api.post("/auth/register", {
        name,
        email,
        password
      });
      const token = res.data.token;
      localStorage.setItem("token", token);
      alert("Registration successful!");
      navigate("/profile");
    } catch (err) {
      console.error("Registration failed:", err.response?.data || err.message);
      alert(err.response?.data?.msg || "Registration error");
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-heading">Register</h2>
      <input
        type="text"
        placeholder="Name"
        className="register-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className="register-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="register-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="register-button"
        onClick={handleRegister}
      >
        Register
      </button>
    </div>
  );
}
