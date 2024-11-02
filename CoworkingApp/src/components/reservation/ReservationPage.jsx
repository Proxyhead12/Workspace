import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ReservationPage.css';
import SpacesService from '../../service/SpacesService';
import ReservationService from '../../service/ReservationsService';

export default function ReservationPage() {
  const { spaceId } = useParams();
  const [reservationDate, setReservationDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [durationHours, setDurationHours] = useState(1);
  const [comment, setComments] = useState('');
  const [spaceDetails, setSpaceDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (spaceId) {
      SpacesService.getSpaceById(spaceId)
        .then(response => setSpaceDetails(response.data))
        .catch(error => setErrorMessage(error.response.data));
    }
  }, [spaceId]);

  const handleReservationSubmit = async (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userId = userData?.id;

    const startDate = `${reservationDate}T${startTime}`;
    const endDate = new Date(new Date(startDate).getTime() + durationHours * 60 * 60 * 1000).toISOString();

    const reservationData = {
      spaceId: parseInt(spaceId, 10),
      userId: parseInt(userId, 10),
      startDate,
      endDate,
      comments: comment,
    };

    try {
      await ReservationService.createReservation(reservationData);
      alert("Reservation Successful!");
    } catch (error) {
      setErrorMessage('Error creating reservation. Please try again.');
    }
  };

  return (
    <div className="reservation-page">
      {errorMessage && <div className="reservation-error-message">{errorMessage}</div>}

      {spaceDetails ? (
        <div className="reservation-card">
          <div className="reservation-space-details">
            <div className="reservation-image-overlay">
              <img src={spaceDetails.urlImage} alt={spaceDetails.name} className="reservation-space-image" />
              <h2 className="reservation-space-title">{spaceDetails.name}</h2>
            </div>
            <div className="reservation-info-section">
              <p><strong>Type:</strong> {spaceDetails.spaceType.replace(/_/g, ' ')}</p>
              <p><strong>Capacity:</strong> {spaceDetails.capacity} guests</p>
              <p><strong>Hourly Rate:</strong> ${spaceDetails.pricePerHour}</p>
              <p><strong>Location:</strong> {spaceDetails.siteName}</p>
              <p><strong>Address:</strong> {spaceDetails.address}</p>
              <p className="reservation-description">{spaceDetails.description}</p>
            </div>

            <div className="reservation-equipment-section">
              <h3>Available Equipment</h3>
              <div className="reservation-equipment-list">
                {spaceDetails.listEquipment.map((equipment, index) => (
                  <div key={index} className="reservation-equipment-item">
                    <strong>{equipment.name}</strong> - {equipment.quantity}
                    <span>{" " + equipment.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <form className="reservation-form" onSubmit={handleReservationSubmit}>
            <h3>Book Your Space</h3>

            <div className="reservation-form-group">
              <label htmlFor="reservationDate">Date</label>
              <input
                type="date"
                id="reservationDate"
                value={reservationDate}
                onChange={(e) => setReservationDate(e.target.value)}
                required
              />
            </div>

            <div className="reservation-form-group">
              <label htmlFor="startTime">Start Time</label>
              <input
                type="time"
                id="startTime"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                required
              />
            </div>

            <div className="reservation-form-group">
              <label htmlFor="durationHours">Duration (hours)</label>
              <input
                type="number"
                id="durationHours"
                value={durationHours}
                onChange={(e) => setDurationHours(e.target.value)}
                min="1"
                max="12"
                required
              />
            </div>

            <div className="reservation-form-group">
              <label htmlFor="comments">Comments</label>
              <textarea
                id="comments"
                value={comment}
                onChange={(e) => setComments(e.target.value)}
                rows="3"
                placeholder="Add any additional comments..."
              />
            </div>

            <button type="submit" className="reservation-submit-button">Confirm Reservation</button>
          </form>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
