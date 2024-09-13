import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3 className="footer-title">About Us</h3>
          <p className="footer-text">CoworkSpace provides flexible workspaces for professionals and teams. Join our community today.</p>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/spaces" className="footer-link">Spaces</a></li>
            <li><a href="/memberships" className="footer-link">Memberships</a></li>
            <li><a href="/events" className="footer-link">Events</a></li>
            <li><a href="/about" className="footer-link">About</a></li>
            <li><a href="/contact" className="footer-link">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="footer-contact">
            <li>+1 (555) 123-4567</li>
            <li>info@coworkspace.com</li>
            <li>123 Main St, City, Country</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-links">
            <a href="#" className="social-link"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="social-link"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="social-link"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="social-link"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">&copy; 2024 CoworkSpace. All rights reserved.</p>
      </div>
    </footer>
  );
}
