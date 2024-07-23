// src/pages/Trending.js

import React, { useState } from 'react';
import './trending.css';


const fetchTrendingPlaces = async (city, event) => {
    // Replace with your API endpoint
    const response = await fetch(`https://api.example.com/trending?city=${city}&event=${event}`);
    const data = await response.json();
    setTrendingPlaces(data.places);
  };
  
  const handleSearch = () => {
    fetchTrendingPlaces(city, event);
  };

  
const Trending = () => {
  const [city, setCity] = useState('');
  const [event, setEvent] = useState('');

  const handleSearch = () => {
    // Add logic to navigate or display top 3 trending places based on the selected city and event
    console.log('Search:', city, event);
  };

  return (
    <div className="container">
      <h2>Top Three on Trend!</h2>
      <div className="filters">
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">Select City</option>
          <option value="Islamabad">Islamabad</option>
          <option value="Lahore">Lahore</option>
          <option value="Karachi">Karachi</option>
          <option value="Muzaffarabad">Muzaffarabad</option>
          <option value="Skardu">Skardu</option>
          {/* Add more cities as needed */}
        </select>



        
        <select value={event} onChange={(e) => setEvent(e.target.value)}>
          <option value="">Select Agenda</option>
          <option value="Food">Food</option>
          <option value="Sightseeing">Sightseeing</option>
          <option value="Festival">Festival</option>
          <option value="Shops">Shops</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="On-Trend">
        <div className="place">
          <img src="path/to/image1.jpg" alt="Place 1" />
          <p>Place 1</p>
        </div>
        <div className="place">
          <img src="path/to/image2.jpg" alt="Place 2" />
          <p>Place 2</p>
        </div>
        <div className="place">
          <img src="path/to/image3.jpg" alt="Place 3" />
          <p>Place 3</p>
        </div>
      </div>
    </div>
  );
};

export default Trending;
