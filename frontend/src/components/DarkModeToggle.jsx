import React, { useEffect, useState } from 'react';
import './DarkModeToggle.css';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() =>
    typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <button
      className="dark-toggle-button"
      onClick={() => setDark(!dark)}
    >
      {dark ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
