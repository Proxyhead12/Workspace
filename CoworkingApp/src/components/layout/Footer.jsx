import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="cs-footer">
      <div className="cs-footer-container">
        <div className="cs-footer-section">
          <h3 className="cs-footer-title">About Us</h3>
          <p className="cs-footer-text">CoworkSpace provides flexible workspaces for professionals and teams. Join our community today.</p>
        </div>
        <div className="cs-footer-section">
          <h3 className="cs-footer-title">Quick Links</h3>
          <ul className="cs-footer-links">
            <li><a href="/spaces" className="cs-footer-link">Spaces</a></li>
            <li><a href="/memberships" className="cs-footer-link">Memberships</a></li>
            <li><a href="/events" className="cs-footer-link">Events</a></li>
            <li><a href="/about" className="cs-footer-link">About</a></li>
            <li><a href="/contact" className="cs-footer-link">Contact</a></li>
          </ul>
        </div>
        <div className="cs-footer-section">
          <h3 className="cs-footer-title">Contact Us</h3>
          <ul className="cs-footer-contact">
            <li>+1 (555) 123-4567</li>
            <li>info@coworkspace.com</li>
            <li>123 Main St, City, Country</li>
          </ul>
        </div>
        <div className="cs-footer-section">
          <h3 className="cs-footer-title">Follow Us</h3>
          <div className="cs-social-links">
            <a href="#" className="cs-social-link"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="cs-social-link"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="cs-social-link"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="cs-social-link"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
      </div>
      <div className="cs-footer-bottom">
        <p className="cs-copyright">&copy; 2024 CoworkSpace. All rights reserved.</p>
      </div>
    </footer>
  );
}
