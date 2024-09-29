import React from 'react';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="section-title">About CoworkSpace</h2>
        <div className="about-content">
          <p>
            CoworkSpace is a modern, flexible workspace solution designed for professionals, entrepreneurs, and teams of all sizes. Our mission is to create an inspiring environment that fosters creativity, collaboration, and productivity.
          </p>
          <p>
            Founded in 2020, we've quickly grown to become a leading provider of coworking spaces, with multiple locations across the country. Our spaces are thoughtfully designed to meet the diverse needs of today's workforce, offering everything from hot desks and dedicated workstations to private offices and meeting rooms.
          </p>
          <p>
            At CoworkSpace, we believe in the power of community. That's why we regularly host networking events, workshops, and social gatherings to help our members connect, learn, and grow together. Join us and become part of a thriving ecosystem of innovators and changemakers.
          </p>
        </div>
      </div>
    </section>
  );
}
