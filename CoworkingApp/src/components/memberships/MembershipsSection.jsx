import React, { useEffect } from 'react';
import MembershipCard from './membershipCard/MembershipCard';
import MembershipService from '../../service/MembershipService';
import './MembershipsSection.css';

export default function MembershipsSection() {
  const [memberships, setMemberships] = React.useState([]);

  useEffect(() => {
    MembershipService.getAllMemberships()
    .then((response) => {
      setMemberships(response.data);
    })
    .catch((error) => {
      console.error('Error axios memberships:', error);
    });
  }, []);

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
