import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SpaceDetailModal.css';

export default function SpaceDetailModal({ space, onClose }) {
  const navigate = useNavigate();

  const goToReservationPage = () => {
    navigate(`/reserve/${space.id}`, { state: { spaceName: space.name } });
  };
  if (!space) return null;
  const convertText = (text) => {
    return text.replace(/_/g, " ");
  };

  return (
    <div className="space-modal-overlay" onClick={onClose}>
      <div className="space-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="space-close-button" onClick={onClose}>×</button>

        <div className="space-modal-body">
          <div className="space-modal-image-section">
            <img src={space.urlImage} alt={space.name} className="space-modal-image" />
          </div>

          <div className="space-modal-details">
            <h2 className="space-modal-title">{space.name}</h2>
            <div className="space-modal-info">
              <p><strong>Type:</strong> {convertText(space.spaceType)}</p>
              <p><strong>Capacity:</strong> {space.capacity}</p>
              <p><strong>Price per Hour:</strong> ${space.pricePerHour}</p>
              <p><strong>Location:</strong> {space.siteName}</p>
              <p><strong>Address:</strong> {space.address}</p>
              <p className="space-modal-description"><strong>Description:</strong> {space.description}</p>
            </div>

            <div className="space-modal-equipment-section">
              <h3><strong>Available Equipment:</strong></h3>
              <div className="space-modal-equipment-list">
                {space.listEquipment.map((equipment, index) => (
                  <div key={index} className="space-modal-equipment-item" title={equipment.description}>
                    <strong>{equipment.name}</strong> - {equipment.quantity} units
                    <p className="equipment-description">{equipment.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <button className="space-reserve-button" onClick={goToReservationPage}>
              Reserve Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
