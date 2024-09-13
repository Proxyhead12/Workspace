import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <a href="/" className="logo">
          <FontAwesomeIcon icon={faCoffee} className="logo-icon" />
          <span className="logo-text">CoworkSpace</span>
        </a>
        <nav className={`header-nav ${isMenuOpen ? 'is-open' : ''}`}>
          <a href="/spaces" className="nav-item">Spaces</a>
          <a href="/memberships" className="nav-item">Memberships</a>
          <a href="/events" className="nav-item">Events</a>
          <a href="/about" className="nav-item">About</a>
          <a href="/contact" className="nav-item">Contact</a>
        </nav>
        <div className="header-actions">
          <button className="btn btn-icon">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <button className="btn btn-icon">
            <FontAwesomeIcon icon={faUser} />
          </button>
          <button 
            className="menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </header>
  );
}
