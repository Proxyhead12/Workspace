import React from 'react';
import EventCard from './EventCard';
import './EventsSection.css';

export default function EventsSection() {
  const events = [
    {
      id: 1,
      title: 'Networking Mixer',
      description: 'An informal networking event to meet and connect with other professionals.',
      date: 'October 5, 2024',
      time: '6:00 PM'
    },
    {
      id: 2,
      title: 'Productivity Workshop',
      description: 'A workshop focused on improving productivity and time management skills.',
      date: 'October 10, 2024',
      time: '10:00 AM'
    },
    {
      id: 3,
      title: 'Startup Pitch Night',
      description: 'A night where startups pitch their ideas to potential investors and mentors.',
      date: 'October 20, 2024',
      time: '7:00 PM'
    }
  ];

  return (
    <section className="events-section">
      <div className="container">
        <h2 className="section-title">Upcoming Events</h2>
        <div className="events-grid">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
