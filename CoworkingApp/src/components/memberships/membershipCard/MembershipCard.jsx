import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MembershipCard.css';

export default function MembershipCard({id, name, description, price, duration, type }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/membership/${id}`);
  }

  return (
    <div className="membership-card">
      <h3 className="membership-title">{name}</h3>
      <ul className="membership-features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <p>{description}</p>
      <p>{duration}</p>
      <p>{type}</p>
      <p>${price}</p>
      <button className="btn btn-primary" onClick={handleClick}>
        Conoce más
      </button>
    </div>
  );
}
