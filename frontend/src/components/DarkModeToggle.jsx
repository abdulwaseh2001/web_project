
import React, { useEffect, useState } from 'react'; // ✅ Correct


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
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)} className="text-sm">
      {dark ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
