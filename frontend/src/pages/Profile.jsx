// frontend/src/pages/Profile.jsx
import React, { useState, useEffect } from "react";
import api from "../api/api";
import "./Profile.css";

export default function Profile() {
  const [name, setName] = useState("");
  const [bio, setBio]   = useState("");

  useEffect(() => {
    api.get("/users/profile")
      .then((res) => {
        setName(res.data.name);
        setBio(res.data.bio);
      })
      .catch((err) => {
        console.error("Could not load profile:", err.response?.data || err.message);
        alert(err.response?.data?.msg || "You must log in first");
      });
  }, []);

  const handleSave = async () => {
    try {
      await api.put("/users/profile", { name, bio });
      alert("Profile saved!");
    } catch (err) {
      console.error("Save failed:", err.response?.data || err.message);
      alert(err.response?.data?.msg || "Error saving profile");
    }
  };

  return (
    <div className="profile-container">
      <h2 className="profile-heading">My Profile</h2>
      <div className="profile-field">
        <label>Name:</label>
        <input
          className="profile-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="profile-field">
        <label>Bio:</label>
        <textarea
          className="profile-input"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>
      <button
        className="profile-button"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
}
