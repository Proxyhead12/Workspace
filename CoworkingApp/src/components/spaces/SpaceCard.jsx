import React from 'react';
import './SpaceCard.css';

export default function SpaceCard({ title, description, price, imageUrl }) {
  return (
    <div className="space-card">
      <div className="image-container">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <div className="price-and-button">
          <span className="price">${price}/hour</span>
          <button className="book-button">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
