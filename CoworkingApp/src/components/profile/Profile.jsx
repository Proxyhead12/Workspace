import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';
import UserService from '../../service/UserService';

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
          const storedUserData = JSON.parse(localStorage.getItem('userData'));
          if (storedUserData && storedUserData.jwt) {
              UserService.login(storedUserData.email, storedUserData.jwt)
                  .then(response => {
                      setUserData(response.data);
                  })
                  .catch(error => {
                      console.error('Error fetching user data:', error);
                  })
                  .finally(() => {
                      setLoading(false);
                  });
          } else {
              setLoading(false);
          }
      }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
  };

  const handleLogout = () => {
    localStorage.removeItem('userData');
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setUserData(prev => ({ ...prev, avatarUrl: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  if (loading) return <div>Cargando perfil...</div>;
  if (!userData) return <div>Error al cargar los datos del perfil.</div>;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="avatar-container">
            <img src={userData.profileImageUrl || '/placeholder.svg'} alt="Avatar" className="avatar" />
            <label htmlFor="avatar-upload" className="avatar-upload-label">
              Cambiar
              <input id="avatar-upload" type="file" accept="image/*" onChange={handleAvatarChange} className="hidden-input" />
            </label>
          </div>
          <div className="user-info">
            <h2>{userData.firstName} {userData.lastName}</h2>
            <p className="user-email">{userData.email}</p>
          </div>
        </div>
        <div className="profile-content">
          <h3>Información Personal</h3>
          <button onClick={() => setIsEditing(!isEditing)} className="edit-button">
            {isEditing ? 'Cancelar' : 'Editar'}
          </button>
          <div className="info-grid">
            <InfoItem label="Nombre" value={userData.firstName || 'No especificado'} isEditing={isEditing} name="firstName" onChange={handleChange} />
            <InfoItem label="Apellido" value={userData.lastName || 'No especificado'} isEditing={isEditing} name="lastName" onChange={handleChange} />
            <InfoItem label="Email" value={userData.email || 'No especificado'} isEditing={isEditing} name="email" onChange={handleChange} />
            <InfoItem label="Miembro desde" value={new Date(userData.accountCreated).toLocaleDateString()} />
          </div>
          {isEditing && <button onClick={handleSave} className="save-button">Guardar Cambios</button>}
          <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
        </div>
      </div>
    </div>
  );
}

function InfoItem({ label, value, isEditing, name, onChange }) {
  return (
    <div className="info-item">
      <span className="info-label">{label}:</span>
      {isEditing ? (
        <input type="text" name={name} value={value} onChange={onChange} className="info-input" />
      ) : (
        <span className="info-value">{value}</span>
      )}
    </div>
  );
}
