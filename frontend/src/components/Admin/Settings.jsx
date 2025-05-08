import { useEffect, useState } from 'react';
import api from '../../api/api';
import './settings.css';

export default function Settings() {
  const [config, setConfig] = useState({ paypalKey: '', emailSupport: '' });

  useEffect(() => {
    api.get('/admin/settings').then(res => setConfig(res.data));
  }, []);

  const handleChange = e => {
    setConfig({ ...config, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    api.put('/admin/settings', config).then(() => alert('Settings saved'));
  };

  return (
    <form className="settings-form" onSubmit={handleSubmit}>
      <h2>System Settings</h2>
      <label>PayPal API Key:
        <input name="paypalKey" value={config.paypalKey} onChange={handleChange} />
      </label>
      <label>Support Email:
        <input name="emailSupport" value={config.emailSupport} onChange={handleChange} />
      </label>
      <button type="submit">Save Settings</button>
    </form>
  );
}
