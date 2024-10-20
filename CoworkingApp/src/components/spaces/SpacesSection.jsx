import React, { useEffect, useState } from 'react';
import SpaceCard from './SpaceCard';
import { API_URL } from '../../config/globals';
import './SpacesSection.css';

export default function SpacesSection() {
    const [spaces, setSpaces] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/spaces/spaces`)
            .then(response => response.json())
            .then(data => setSpaces(data))
            .catch(error => console.error('Error fetching spaces:', error));
    }, []);

    return (
        <section className="py-20">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Our Spaces</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {spaces.map(space => (
                        <SpaceCard key={space.id} {...space} />
                    ))}
                </div>
            </div>
        </section>
    );
}