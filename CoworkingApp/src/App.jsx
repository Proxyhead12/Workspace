import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SpacesSection from './components/spaces/SpacesSection';
import Home from './components/home/Hero';
import './styles/globals.css';
import MembershipsSection from './components/memberships/MembershipsSection';
import ContactForm from './components/contact/ContactForm';
import Profile from './components/profile/Profile';
import AboutSection from './components/about/AboutSection';
import ReservationPage from './components/reservation/ReservationPage';
import MembershipDetail from './components/memberships/membershipDetail/MembershipDetail';
import { ToastNotification } from './components/notification/ToastNotification';
import  InvoicePage  from './components/reservation/invoicePage/InvoicePage';
import "./styles/appError.css"
const NotFound = () => (
  <div className="not-found-container">
    <i className="fas fa-exclamation-triangle not-found-icon"></i>
    <h2 className="not-found-title">Page Not Found</h2>
    <p className="not-found-message">Sorry, the page you are looking for does not exist.</p>
  </div>
);


function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <ToastNotification />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spaces" element={<SpacesSection />} /> 
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/memberships" element={<MembershipsSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/reserve/:spaceId" element={<ReservationPage />} />
          <Route path="/membership/:membershipId" element={<MembershipDetail />} />
          <Route path="/invoice" element={<InvoicePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
