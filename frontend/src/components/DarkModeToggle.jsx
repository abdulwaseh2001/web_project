import React, { useEffect, useState } from 'react';
import './DarkModeToggle.css'; // ✅ Local CSS

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (dark) {
        document.documentElement.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
      }
    }
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)} className="dark-toggle-button">
      {dark ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
