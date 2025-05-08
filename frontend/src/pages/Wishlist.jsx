import React, { useEffect, useState } from 'react';
import './Wishlist.css';

export default function Wishlist() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('wishlist')) || [];
    setFavorites(favs);
  }, []);

  return (
    <div className="wishlist-container">
      <h2>My Wishlist ❤️</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul>
          {favorites.map(item => (
            <li key={item.id} className="wishlist-item">
              <strong>{item.name}</strong> — {item.type} — {item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
