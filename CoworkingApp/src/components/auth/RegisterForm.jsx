import React, { useState } from 'react';
import './Auth.css';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de registro
    console.log('Register attempt:', { name, email, password });
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Full Name" 
        required 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        type="email" 
        placeholder="Email" 
        required 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        type="password" 
        placeholder="Password" 
        required 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="submit-btn">Register</button>
    </form>
  );
}