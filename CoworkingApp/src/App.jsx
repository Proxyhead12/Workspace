import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SpacesSection from './components/spaces/SpacesSection';
import Home from './components/home/Hero'
import './styles/globals.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/spaces" element={<SpacesSection />} /> 
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
