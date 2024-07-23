// src/App.js

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Trending from './pages/trending';
import AboutUs from './pages/aboutus';
import SignIn from './pages/signin';
import Explore from './pages/explore';
import TrendingPlaces from './components/trendingplaces';
import ProtectedRoute from './components/protectedroute';
import './App.css';

function App() {
  const [transition, setTransition] = useState('fade-in');
  const location = useLocation();

  useEffect(() => {
    // Trigger fade-out transition on navigation
    setTransition('fade-out');

    // Cleanup: remove fade-out class after transition duration
    const timer = setTimeout(() => {
      setTransition('fade-in');
    }, 1000); // Match this time with your fade-out transition duration

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className={`App ${transition}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/trending-places" element={<TrendingPlaces apiKey="YOUR_GOOGLE_API_KEY" />} />
      </Routes>
    </div>
  );
}

export default App;




/*const App = () => {
  return (
    <Router>
       <home />
      <Navbar />
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/trending" element={<trending />} />
        <Route path="/aboutus" element={<aboutus />} />
        <Route path="/signin" element={<signin />} />
        <Route path="/explore" element={<explore />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <div className="App">
      <home />
    </div>
  );
}*/





