import './App.css'
import LandingPage from './pages/LandingPage.jsx'
import Loader from './components/loader.jsx'
import React, { useState, useEffect } from 'react';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);  // Hide the loader after 2 seconds
      console.log()
    }, 2000);
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <LandingPage />
      )}
    </div>
  );

}

export default App
