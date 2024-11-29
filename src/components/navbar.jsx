import React from 'react';
import './NavigationBar.css'; // Import the custom CSS file for the navbar

const NavigationBar = ({ navigateHome, navigateMovies }) => {
  return (
    <div className="navbar-custom">
      <div className="navbar-container">
        <span className="navbar-brand"><span class="bluecolor">T</span>ECH <span class="bluecolor">H</span>IVE</span>
        <div className="navbar-links">
          <button className="nav-button" onClick={navigateHome}>Home</button>
          <button className="nav-button" onClick={navigateMovies}>Explore </button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
