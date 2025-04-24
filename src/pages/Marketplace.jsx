import React, { useEffect, useState } from 'react';
import assets from '../data/dummyAssets.json';

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
    <div className="p-6">
      <h2 className="text-xl mb-4">Asset Marketplace</h2>

      <div className="mb-4 flex flex-wrap gap-2">
        <input
          type="text"
          placeholder="Search assets..."
          className="p-2 border rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="p-2 border rounded"
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
          <li key={item.id} className="mb-2 p-2 border rounded flex justify-between items-center">
            <span>
              <strong>{item.name}</strong> — {item.type} — {item.price}
            </span>
            <button
              className="text-red-500"
              onClick={() => handleAddToWishlist(item)}
            >
              ❤️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
