import React from 'react';
import './Hero.css'; 
export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <h1 className="hero-title">Find Your Perfect Workspace</h1>
        <p className="hero-description">Book workspaces, meeting rooms, and event spaces with ease.</p>
        <a href="/spaces" className="btn btn-primary">Explore Spaces</a>
      </div>
    </section>
  );
}
