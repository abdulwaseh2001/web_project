import React, { useState } from 'react';
import './Profile.css';

export default function Profile() {
  const [name, setName] = useState("Jane Dev");
  const [bio, setBio] = useState("Indie game dev, pixel art enjoyer.");

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
      <button className="profile-button">Save (just UI)</button>
    </div>
  );
}
