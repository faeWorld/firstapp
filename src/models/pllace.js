// src/models/place.js

const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    event: { type: String, required: true },
    imageUrl: { type: String, required: true },
});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
