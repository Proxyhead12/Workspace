import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SpacesSection from './components/spaces/SpacesSection';
import EventsSection from './components/events/EventsSection';
import AuthSection from './components/auth/AuthModal';
import Home from './components/home/Hero'
import './styles/globals.css';
import MembershipsSection from './components/memberships/MembershipsSection';
import ContactForm from './components/contact/ContactForm';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/events' element={<EventsSection />} />
          <Route path="/spaces" element={<SpacesSection />} /> 
          <Route path="/auth" element={<AuthSection />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/memberships" element={<MembershipsSection />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
