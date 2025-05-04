import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/api';
import './asset-list.css';

export default function AssetList() {
  const [assets, setAssets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/admin/assets').then(res => setAssets(res.data));
  }, []);

  const deleteAsset = id => {
    if (window.confirm('Delete this asset?')) {
      api.delete(`/admin/assets/${id}`).then(() => {
        setAssets(assets.filter(a => a._id !== id));
      });
    }
  };

  return (
    <div className="asset-list">
      <h2>Manage Assets</h2>
      <button onClick={() => navigate('new')}>Add New</button>
      <table>
        <thead>
          <tr><th>Name</th><th>Type</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {assets.map(a => (
            <tr key={a._id}>
              <td>{a.name}</td>
              <td>{a.type}</td>
              <td>
                <button onClick={() => navigate(`${a._id}/edit`)}>Edit</button>
                <button onClick={() => deleteAsset(a._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
