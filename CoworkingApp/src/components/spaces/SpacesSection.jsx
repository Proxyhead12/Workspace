import React, { useEffect, useState } from 'react';
import SpaceCard from './spaceCard/SpaceCard';
import SpaceDetailModal from './spaceDetail/SpaceDetailModal';
import SpacesService from '../../service/SpacesService';
import './SpacesSection.css';

export default function SpacesSection() {
    const [spaces, setSpaces] = useState([]);
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [type, setType] = useState('');
    const [selectedSpace, setSelectedSpace] = useState(null);

    useEffect(() => {
        listSpaces();
    }, []);

    const listSpaces = (query = '') => {
        SpacesService.getSpacesForFilter(query)
            .then(response => setSpaces(response.data))
            .catch(error => console.error('Error axios spaces:', error));
    };

    const filterSpaces = () => {
        const params = [];
        if (city) params.push(`city=${city}`);
        if (district) params.push(`district=${district}`);
        if (type) params.push(`spaceType=${type}`);
        const query = params.length ? `?${params.join('&')}` : '';
        listSpaces(query);
    };

    const resetFilters = () => {
        setCity('');
        setDistrict('');
        setType('');
        listSpaces();
    };

    const openModal = (space) => setSelectedSpace(space);
    const closeModal = () => setSelectedSpace(null);

    return (
        <div className='container-spaces'>
            <h1 className='space-title'>Find Your Ideal Space</h1>
            <div className="content-wrapper">
                <div className="filter-section">
                    <h2>Filter Spaces</h2>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" value={city} onChange={e => setCity(e.target.value)} placeholder="City" />
                    <label htmlFor="district">District</label>
                    <input type="text" id="district" value={district} onChange={e => setDistrict(e.target.value)} placeholder="District" />
                    <label htmlFor="type">Space Type</label>
                    <input type="text" id="type" value={type} onChange={e => setType(e.target.value)} placeholder="Space Type" />
                    <button className="filter-button" onClick={filterSpaces}>Apply Filter</button>
                    <button className="reset-button" onClick={resetFilters}>Reset</button>
                </div>
                <div className="spaces-list">
                    {spaces.map(space => (
                        <SpaceCard key={space.id} space={space} onClick={() => openModal(space)} />
                    ))}
                </div>
            </div>
            {selectedSpace && <SpaceDetailModal space={selectedSpace} onClose={closeModal} />}
        </div>
    );
}
