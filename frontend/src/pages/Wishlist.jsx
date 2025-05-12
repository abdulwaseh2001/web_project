// frontend/src/pages/Wishlist.jsx
import React, { useEffect, useState } from "react";
import api from "../api/api";
import "./Wishlist.css";

export default function Wishlist() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    api.get("/users/wishlist")
      .then((res) => setFavorites(res.data))
      .catch((err) => {
        console.error("Could not load wishlist:", err.response?.data || err.message);
        alert("You must be logged in to see your wishlist");
      });
  }, []);

  return (
    <div className="wishlist-container">
      <h2>My Wishlist ❤️</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul>
          {favorites.map((item) => (
            <li key={item._id} className="wishlist-item">
              <strong>{item.name}</strong> — {item.type} — {item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
