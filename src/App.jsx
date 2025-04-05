import './App.css';
import LandingPage from './pages/LandingPage.jsx';
import MapPage from './pages/MapPage.jsx';
import Loader from './components/loader.jsx';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/map" element={<MapPage />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
