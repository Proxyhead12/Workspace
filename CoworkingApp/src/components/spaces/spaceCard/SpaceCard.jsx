import React from 'react';
import './SpaceCard.css';

export default function SpaceCard({ space, onClick }) {
  const convertText = (text) => {
    return text.replace(/_/g, " ");
  };

  return (
    <div className="space-card" onClick={onClick}>
      <div className='space-type-label'>{convertText(space.spaceType)}</div>
      <div className="image-container">
        <img src={space.urlImage} alt={space.name} />
      </div>
      <div className="card-content">
        <h3 className="space-name">{space.name}</h3>
        <p className="space-capacity">Capacity: {space.capacity}</p>
        <span className="price">${space.pricePerHour}/hour</span>
        <p className="space-location">{space.siteName}</p>
        <p className="space-click">click me for more details</p>
      </div>
    </div>
  );
}
