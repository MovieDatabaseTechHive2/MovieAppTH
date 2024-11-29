import React, { useState } from 'react';
import './header.css';
import logo from './assets/tech hivies.png';




const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <nav className='flexSB'>
        <div className='logo'>
        <img src={logo} alt='Logo' />

        </div>
        <div className='nav-links'>
          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Contact</a>
        </div>
        <div className='account'>
          <button>Login</button>
        </div>
        <div className='toggle' onClick={toggleMenu}>
          <i className='fas fa-bars'></i>
        </div>
      </nav>
      <div className={`navMenu-list ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </div>
      <div className='search-form'>
        <input type='text' placeholder='Search...' />
        <button>Go</button>
      </div>
    </header>
  );
};

export default Header;
