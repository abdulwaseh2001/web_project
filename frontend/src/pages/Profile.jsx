import React, { useState, useEffect } from 'react';
import api from '../api/api';
import './Profile.css';

export default function Profile() {
  const [name, setName]     = useState('');
  const [bio, setBio]       = useState('');
  const [social, setSocial] = useState({ twitter: '', github: '' });
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    api.get('/users/profile')
      .then(res => {
        setName(res.data.name);
        setBio(res.data.bio || '');
        setSocial({
          twitter: res.data.twitter || '',
          github:  res.data.github  || '',
        });
        setSkills(res.data.skills || []);
      })
      .catch(() => alert('Could not load profile'));
  }, []);

  const handleSave = async () => {
    try {
      await api.put('/users/profile', {
        name, bio, ...social, skills
      });
      alert('Profile saved!');
    } catch {
      alert('Error saving profile');
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-avatar">
        <div className="avatar">{name.charAt(0)}</div>
        <button className="small-btn">Upload Photo</button>
      </div>

      <h2 className="profile-heading">My Profile</h2>

      <div className="profile-field">
        <label>Name:</label>
        <input
          className="profile-input"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div className="profile-field">
        <label>Bio:</label>
        <textarea
          className="profile-input"
          value={bio}
          onChange={e => setBio(e.target.value)}
        />
      </div>

      <div className="profile-field">
        <label>Twitter:</label>
        <input
          className="profile-input"
          value={social.twitter}
          onChange={e => setSocial({ ...social, twitter: e.target.value })}
        />
      </div>

      <div className="profile-field">
        <label>GitHub:</label>
        <input
          className="profile-input"
          value={social.github}
          onChange={e => setSocial({ ...social, github: e.target.value })}
        />
      </div>

      <div className="profile-field">
        <label>Skills (comma‐separated):</label>
        <input
          className="profile-input"
          value={skills.join(', ')}
          onChange={e => setSkills(e.target.value.split(',').map(s => s.trim()))}
        />
      </div>

      <button className="profile-button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}
