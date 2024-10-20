import React from 'react';
import './SpaceCard.css';

export default function SpaceCard({ address, city, description, image, price, type }) {
  return (
    <div className="space-card">
      <div className="image-container">
        <img src={image} />
      </div>
      <div className="content">
        <h3 className="title">{address}</h3>
        <p className="description">{description}</p>
        <div className="price-and-button">
          <span className="type">{city}</span>
          <span className="price">${price}/hour</span>
          <button className="book-button">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}