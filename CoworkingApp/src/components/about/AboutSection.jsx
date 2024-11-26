import React from 'react';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <div className="container-about">
      <div className="about-header">
        <h2 className="about-section-title">About CoworkSpace</h2>
        <p className="about-subtitle">Where Inspiration Meets Productivity</p>
      </div>
      <div className="about-content">
        <div className="about-section">
          <div className="about-text">
            <h3 className="section-subtitle">Our Purpose</h3>
            <p className="section-description">
              At CoworkSpace, we are dedicated to crafting work environments that fuel creativity and human connection. We believe that great things happen when people come together in spaces designed for inspiration and productivity.
            </p>
          </div>
          <img className="about-image" src="https://plus.unsplash.com/premium_photo-1681487178876-a1156952ec60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Inspiring Workspace" />
        </div>

        <div className="about-section">
          <img className="about-image" src="https://plus.unsplash.com/premium_photo-1681487178876-a1156952ec60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Collaborative Meeting" />
          <div className="about-text">
            <h3 className="section-subtitle">Workspace Experts</h3>
            <p className="section-description">
              Our team of workspace experts continually refines environments to support personal and professional growth, ensuring your success is our top priority. Let’s redefine the way you work, together.
            </p>
          </div>
        </div>

        <div className="about-section about-section-last">
          <div className="about-text full-width">
            <h3 className="section-subtitle">Empowered by Expertise</h3>
            <p className="section-description">
             Our mission is to enhance work environments, fostering growth and creativity as we broaden our impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
