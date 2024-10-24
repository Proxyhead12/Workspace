import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser, faBars, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import AuthModal from '../auth/AuthModal';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      setIsUserLoggedIn(true);
    }
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('userData');
    setIsUserLoggedIn(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
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
          <div className="user-menu">
            {isUserLoggedIn ? (
              <div className="dropdown">
                <button className="btn-icon" onClick={toggleDropdown}>
                  <FontAwesomeIcon icon={faUserCircle} />
                </button>
                <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                  <a href="/profile" className="dropdown-item dropdown-item1">Ver Perfil</a>
                  <button onClick={handleLogout} className="dropdown-item">
                    <FontAwesomeIcon icon={faSignOutAlt} /> Salir
                  </button>
                </div>
              </div>
            ) : (
              <button className="btn-icon" onClick={toggleModal}>
                <FontAwesomeIcon icon={faUser} /> Iniciar sesión
              </button>
            )}
          </div>
          <button 
            className="menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
      {isModalOpen && <AuthModal onClose={toggleModal} />}
    </header>
  );
}
