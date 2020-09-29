const mongoose = require('mongoose');

const Items = mongoose.model("items", new mongoose.Schema({
    name: { type: String, required: true}
}));
module.exports = Items;