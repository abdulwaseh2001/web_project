import React, { useEffect, useState } from 'react';

export default function Wishlist() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('wishlist')) || [];
    setFavorites(favs);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">My Wishlist ❤️</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul>
          {favorites.map(item => (
            <li key={item.id} className="mb-2 p-2 border rounded">
              <strong>{item.name}</strong> — {item.type} — {item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}