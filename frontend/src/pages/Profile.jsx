import React, { useState } from 'react';

export default function Profile() {
  const [name, setName] = useState("Jane Dev");
  const [bio, setBio] = useState("Indie game dev, pixel art enjoyer.");

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">My Profile</h2>
      <div className="mb-2">
        <label>Name:</label>
        <input
          className="block p-2 border rounded w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label>Bio:</label>
        <textarea
          className="block p-2 border rounded w-full"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 mt-2">Save (just UI)</button>
    </div>
  );
}