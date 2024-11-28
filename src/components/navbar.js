import React, { useState } from 'react';
import '../App.css'; 


const NavigationBar = () => {
  const [section, setSection] = useState('home');

  const renderContent = () => {
    switch (section) {
      case 'home':
        return (
          <>
            <h1>Home</h1>
            <p>Discover trending and recommended movies.</p>
          </>
        );
      case 'search':
        return (
          <>
            <h1>Search</h1>
            <p>Find your favorite movies and shows.</p>
          </>
        );
      default:
        return (
          <>
            <h1>Welcome to the Movie App</h1>
            <p>Select an option from the navigation bar.</p>
          </>
        );
    }
  };

  return (
    <div>
      <div className="navbar">
        
       
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default NavigationBar;

