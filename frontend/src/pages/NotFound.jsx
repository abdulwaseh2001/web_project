import React from 'react';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h2>Uh oh—lost in the ether?</h2>
      <p>We can’t find that page. Try heading back home.</p>
      <button className="notfound-button" onClick={() => window.location = '/'}>
        Go Home
      </button>
    </div>
  );
}
