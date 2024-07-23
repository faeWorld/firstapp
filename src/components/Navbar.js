import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/cute.png'; 
import globeIcon from '../assets/global.png';

const Navbar = () => {
  const [country, setCountry] = useState('Pakistan');

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    // Add logic here to change the map or perform other actions based on the selected country
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="dropdown">
          <img src={globeIcon} alt="Globe Icon" className="globe-icon" />
          <div className="dropdown-content">
            <select value={country} onChange={handleCountryChange}>
              <option value="Pakistan">Pakistan</option>
              {/* Add more countries here */}
            </select>
          </div>
        </div>
      </div>
      <ul className="navbar-links">
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
        <li><NavLink to="/trending" className={({ isActive }) => isActive ? 'active' : ''}>Trending</NavLink></li>
        <li><NavLink to="/aboutus" className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink></li>
        <li><NavLink to="/signin" className={({ isActive }) => isActive ? 'active' : ''}>Sign In</NavLink></li>
        <li><NavLink to="/explore" className={({ isActive }) => isActive ? 'active' : ''}>Explore</NavLink></li>
      </ul>
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="KOI Logo" className="logo-image" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
