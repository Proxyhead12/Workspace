import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SpacesSection from './components/spaces/SpacesSection';
import EventsSection from './components/events/EventsSection';
import Home from './components/home/Hero'
import './styles/globals.css';
import MembershipsSection from './components/memberships/MembershipsSection';
import ContactForm from './components/contact/ContactForm';
import Profile from './components/profile/Profile';
import AboutSection from './components/about/AboutSection';
import ReservationPage from './components/reservation/ReservationPage';
import MembershipDetail from './components/memberships/membershipDetail/MembershipDeatil';


function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/events' element={<EventsSection />} />
          <Route path="/spaces" element={<SpacesSection />} /> 
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/memberships" element={<MembershipsSection />} />
          <Route path="/about" element={<AboutSection/>} />
          <Route path="/reserve/:spaceId" element={<ReservationPage />} />
          <Route path="/membership/:membershipId" element={<MembershipDetail />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
