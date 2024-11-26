import React from 'react';
import MembershipCard from './MembershipCard';
import './MembershipsSection.css';

export default function MembershipsSection() {
  const memberships = [
    {
      id: 1,
      title: 'Básico',
      features: [
        'Acceso a espacios de trabajo compartidos',
        '10 horas de uso de sala de reuniones',
        'Wi-Fi de alta velocidad',
        'Café y té incluidos'
      ],
      price: 99
    },
    {
      id: 2,
      title: 'Pro',
      features: [
        'Acceso ilimitado a espacios de trabajo compartidos',
        '20 horas de uso de sala de reuniones',
        'Wi-Fi de alta velocidad',
        'Café y té incluidos',
        'Servicios de impresión'
      ],
      price: 199
    },
    {
      id: 3,
      title: 'Empresarial',
      features: [
        'Oficina privada dedicada',
        'Uso ilimitado de sala de reuniones',
        'Wi-Fi de alta velocidad',
        'Café y té incluidos',
        'Servicios de impresión',
        'Acceso 24/7'
      ],
      price: 399
    }
  ];

  return (
    <section className="memberships-section">
      <div className="container">
        <h2 className="section-title">Membresías</h2>
        <div className="membership-grid">
          {memberships.map((membership) => (
            <MembershipCard key={membership.id} {...membership} />
          ))}
        </div>
      </div>
    </section>
  );
}
