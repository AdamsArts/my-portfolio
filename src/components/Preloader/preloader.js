// src/components/Preloader/Preloader.js
import React from 'react';
import { BarLoader, DotLoader } from 'react-spinners';
import './preloader.css';

const Preloader = () => {
  return (
    <div className="preloader-container">
      <DotLoader color="gold"  speedMultiplier={3} loading={true} />
    </div>
  );
}

export default Preloader;