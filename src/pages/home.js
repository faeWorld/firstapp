// src/pages/home.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import image1 from '../assets/explorer.png';
import image2 from '../assets/map line.png';
import image3 from '../assets/homepage map decor.png';
import image4 from '../assets/schooloffish1.png';
import image5 from '../assets/school of fish.png';

const Home = () => {
    const navigate = useNavigate();

    const handleScrollToTrending = () => {
        navigate('/trending'); // Navigate to the Trending page
    };

    return (
        <div>
            <div>
                <h1 className="title">We are here to help you travel at best</h1>
                <div className="image-container">
                    <img src={image1} alt="Image 1" className="image image1" />
                    <img src={image2} alt="Image 2" className="image image2" />
                    <img src={image3} alt="Image 3" className="image image3" />
                    
                </div>
                <img src={image5} alt="Image 5" className="image image5" />
            </div>
            <div className="water-ripple">
                <img src={image4} alt="Rotating Fish" className="rotating-image" />
            </div>
        </div>
    );
};

export default Home;



