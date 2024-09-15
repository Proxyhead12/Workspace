import React, { useState } from 'react';
import './Auth.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de inicio de sesión
    console.log('Login attempt:', { email, password });
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
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
      <button type="submit" className="submit-btn">Login</button>
    </form>
  );
}