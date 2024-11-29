import React, { useState } from 'react';
import '../App.css'; 


const NavigationBar = () => {
  const [section, setSection] = useState('home');

  const renderContent = () => {
    switch (section) {
      case 'home':
        return (
          <>
            <h1>Welcome to the Movie App!</h1>
          </>
        );
      case 'search':
        return (
          <>
            <h1>Find your favourite movies and shows.</h1>
          </>
        );
      default:
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

