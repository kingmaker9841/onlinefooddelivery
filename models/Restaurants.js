const mongoose = require('mongoose');

const Restaurants = mongoose.model("restaurants", new mongoose.Schema({
    name: { type: String, required: true},
    location: { type: String, required: true},
    phoneNumber: { type: String, required: true},
    email : { type: String, required: true},
    password: { type: String, required: true},
    createdAt: { type: Date, required: true}
}));

module.exports = Restaurants;