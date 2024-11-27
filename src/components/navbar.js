import React from 'react';
import './Navbar.css';
import TechHiveLogo from '../tech hive.png'; // Ensure this path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Add the logo */}
        <img src={TechHiveLogo} alt="Tech Hive Logo" className="navbar-logo" />
        <div className="navbar-brand">MovieApp</div>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
      
      </ul>
      <div className="navbar-buttons">
        <button className="btn search-btn">Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
