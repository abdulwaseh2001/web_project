// frontend/src/pages/Home.jsx
import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero */}
      <section className="hero">
        <h1>The Indie Coalition</h1>
        <p>Bringing together indie game devs, artists and composers to build better games—together.</p>
        <button onClick={()=>window.location='/register'}>Join the Coalition</button>
      </section>

      {/* Features */}
      <section className="features">
        <h2>What You Can Do</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Find Teammates</h3>
            <p>Browse profiles by skill, experience, and portfolio highlights.</p>
          </div>
          <div className="feature-card">
            <h3>Exchange Assets</h3>
            <p>Upload or download sprites, backgrounds, sounds—and manage licensing.</p>
          </div>
          <div className="feature-card">
            <h3>Get Feedback</h3>
            <p>Share your prototype builds in the Showcase and collect community reviews.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <h2>Ready to Level Up Your Project?</h2>
        <button onClick={()=>window.location='/marketplace'}>Explore the Marketplace</button>
      </section>
    </div>
  );
}
