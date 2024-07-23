// src/components/TrendingPlaces.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrendingPlaces = ({ apiKey }) => {
    const [trendingPlaces, setTrendingPlaces] = useState([]);
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);

    useEffect(() => {
        if (lat && lng) {
            fetchTrendingPlaces(lat, lng);
        }
    }, [lat, lng]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
            },
            (error) => {
                console.error("Error getting user location:", error);
            }
        );
    }, []);

    const fetchTrendingPlaces = async (lat, lng) => {
        try {
            const response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json`, {
                params: {
                    location: `${lat},${lng}`,
                    radius: 1500,
                    type: 'tourist_attraction',
                    key: apiKey
                }
            });
            setTrendingPlaces(response.data.results);
        } catch (error) {
            console.error("Error fetching trending places:", error);
        }
    };

    return (
        <div className="trending-places">
            <h2>Trending Places</h2>
            <div className="places-list">
                {trendingPlaces.map((place, index) => (
                    <div key={index} className="place">
                        <img src={place.photos ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=${apiKey}` : 'placeholder.jpg'} alt={place.name} />
                        <p>{place.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingPlaces;
