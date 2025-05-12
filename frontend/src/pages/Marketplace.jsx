import React, { useEffect, useState } from 'react';
import api from '../api/api';
import './Marketplace.css';

export default function Marketplace() {
  const [items, setItems]             = useState([]);
  const [search, setSearch]           = useState('');
  const [typeFilter, setTypeFilter]   = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;

  useEffect(() => {
    api.get('/assets')
      .then(res => setItems(res.data))
      .catch(() => alert('Could not load assets'));
  }, []);

  const filtered = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) &&
    (typeFilter === '' || item.type === typeFilter)
  );
  const totalPages = Math.ceil(filtered.length / perPage);
  const pageItems  = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

  const handleAddToWishlist = async item => {
    try {
      await api.post('/users/wishlist', { assetId: item._id });
      alert('Added to wishlist!');
    } catch {
      alert('Could not add to wishlist');
    }
  };

  return (
    <div className="marketplace-container">
      <h2>Asset Marketplace</h2>

      <div className="marketplace-controls">
        <div className="marketplace-filters">
          <input
            type="text"
            placeholder="Search assets…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
            <option value="">All Types</option>
            <option value="sprite">Sprite</option>
            <option value="background">Background</option>
          </select>
        </div>
        <div className="marketplace-sort">
          <label>Sort by:</label>
          <select>
            <option value="name">Name ↑</option>
            <option value="price">Price ↑</option>
          </select>
        </div>
      </div>

      <ul>
        {pageItems.map(item => (
          <li key={item._id} className="asset-card">
            <img
              src={item.thumbnailUrl || '/placeholder.png'}
              alt={item.name}
              className="asset-thumb"
            />
            <div className="asset-details">
              <strong>{item.name}</strong>
              <p className="asset-desc">{item.description || 'No description provided.'}</p>
              <small>{item.type}</small>
            </div>
            <button onClick={() => handleAddToWishlist(item)}>❤️</button>
          </li>
        ))}
      </ul>

      <div className="pagination">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            className={currentPage === i + 1 ? 'active' : ''}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        {currentPage < totalPages && (
          <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        )}
      </div>
    </div>
  );
}
