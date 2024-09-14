import React from 'react';
import './EventCard.css';

export default function EventCard({ title, description, date, time }) {
  return (
    <div className="event-card">
      <h3 className="event-title">{title}</h3>
      <p className="event-description">{description}</p>
      <p className="event-date">{date}</p>
      <p className="event-time">{time}</p>
      <button className="btn btn-outline">Register</button>
    </div>
  );
}
    