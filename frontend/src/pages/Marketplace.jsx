import React, { useEffect, useState } from 'react';
import assets from '../data/dummyAssets.json';
import './Marketplace.css';

export default function Marketplace() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  useEffect(() => {
    setItems(assets);
  }, []);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) &&
    (typeFilter === '' || item.type === typeFilter)
  );

  const handleAddToWishlist = (item) => {
    const existing = JSON.parse(localStorage.getItem('wishlist')) || [];
    const already = existing.find(i => i.id === item.id);
    if (!already) {
      localStorage.setItem('wishlist', JSON.stringify([...existing, item]));
      alert('Added to wishlist!');
    } else {
      alert('Already in wishlist!');
    }
  };

  return (
    <div className="marketplace-container">
      <h2>Asset Marketplace</h2>

      <div className="marketplace-filters">
        <input
          type="text"
          placeholder="Search assets..."
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
        {filteredItems.map(item => (
          <li key={item.id} className="asset-card">
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
