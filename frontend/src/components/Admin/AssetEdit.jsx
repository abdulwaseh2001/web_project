import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../api/api';
import './asset-edit.css';

export default function AssetEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [asset, setAsset] = useState({ name: '', type: '' });

  useEffect(() => {
    if (id !== 'new') {
      api.get(`/admin/assets/${id}`).then(res => setAsset(res.data));
    }
  }, [id]);

  const handleChange = e => {
    setAsset({ ...asset, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const method = id === 'new' ? api.post : api.put;
    const url = id === 'new' ? '/admin/assets' : `/admin/assets/${id}`;
    method(url, asset).then(() => navigate('/admin/content'));
  };

  return (
    <form className="asset-edit-form" onSubmit={handleSubmit}>
      <h2>{id === 'new' ? 'Add New Asset' : 'Edit Asset'}</h2>
      <label>Name:
        <input name="name" value={asset.name} onChange={handleChange} />
      </label>
      <label>Type:
        <input name="type" value={asset.type} onChange={handleChange} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}
