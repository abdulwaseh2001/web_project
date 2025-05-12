// frontend/src/pages/Marketplace.jsx
import React, { useEffect, useState } from "react";
import api from "../api/api";
import "./Marketplace.css";

export default function Marketplace() {
  const [items, setItems]           = useState([]);
  const [search, setSearch]         = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  useEffect(() => {
    api.get("/assets")
      .then((res) => setItems(res.data))
      .catch((err) => {
        console.error("Failed to load assets:", err.response?.data || err.message);
        alert("Could not load assets");
      });
  }, []);

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (typeFilter === "" || item.type === typeFilter)
  );

  const handleAddToWishlist = async (item) => {
    try {
      await api.post("/users/wishlist", { assetId: item._id });
      alert("Added to wishlist!");
    } catch (err) {
      console.error(err);
      alert("Could not add to wishlist");
    }
  };

  return (
    <div className="marketplace-container">
      <h2>Asset Marketplace</h2>
      <div className="marketplace-filters">
        <input
          type="text"
          placeholder="Search assets…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="sprite">Sprite</option>
          <option value="background">Background</option>
        </select>
      </div>
      <ul>
        {filteredItems.map((item) => (
          <li key={item._id} className="asset-card">
            <span>
              <strong>{item.name}</strong> — {item.type} — {item.price}
            </span>
            <button onClick={() => handleAddToWishlist(item)}>❤️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
