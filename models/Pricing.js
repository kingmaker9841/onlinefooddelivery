const mongoose = require('mongoose');

const Pricing = mongoose.model("pricing", new mongoose.Schema({
    restaurantId: {type: mongoose.Schema.Types.ObjectId, ref: "restaurants"},
    itemId: {type: mongoose.Schema.Types.ObjectId, ref: "items"},
    price: { type: Number, required: true}
}));

module.exports = Pricing;