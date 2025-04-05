import React from 'react';
import './Loader.css';
import planeLogo from './logo_loader.png';

const Loader = () => (
  <div className="loader-body">
    {/* Top line pair */}
    <div className="line-pair">
      <div className="half-line left-line"></div>
      <div className="half-line right-line"></div>
    </div>

    {/* Logo */}
    <img src={planeLogo} alt="Redirecting Plane" className="center-logo" />

    {/* Bottom line pair */}
    <div className="line-pair">
      <div className="half-line left-line"></div>
      <div className="half-line right-line"></div>
    </div>

    {/* Text */}
    
  </div>
);

export default Loader;

