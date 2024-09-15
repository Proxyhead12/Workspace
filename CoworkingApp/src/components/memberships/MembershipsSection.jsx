import React from 'react';
import MembershipCard from './MembershipCard';
import './MembershipsSection.css';

export default function MembershipsSection() {
  const memberships = [
    {
      id: 1,
      title: 'Basic',
      features: [
        'Access to shared workspaces',
        '10 hours of meeting room usage',
        'High-speed Wi-Fi',
        'Coffee and tea included'
      ],
      price: 99
    },
    {
      id: 2,
      title: 'Pro',
      features: [
        'Unlimited access to shared workspaces',
        '20 hours of meeting room usage',
        'High-speed Wi-Fi',
        'Coffee and tea included',
        'Printing services'
      ],
      price: 199
    },
    {
      id: 3,
      title: 'Enterprise',
      features: [
        'Dedicated private office',
        'Unlimited meeting room usage',
        'High-speed Wi-Fi',
        'Coffee and tea included',
        'Printing services',
        '24/7 access'
      ],
      price: 399
    }
  ];

  return (
    <section className="memberships-section">
      <div className="container">
        <h2 className="section-title">Memberships</h2>
        <div className="membership-grid">
          {memberships.map((membership) => (
            <MembershipCard key={membership.id} {...membership} />
          ))}
        </div>
      </div>
    </section>
  );
}
