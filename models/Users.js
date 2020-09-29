const mongoose = require('mongoose');

const Users = mongoose.model("users", new mongoose.Schema({
    fullname: { type: String, required: true},
    phoneNumber: { type: Number, required: true},
    currentAddress: { type: String, required: true}
}));

module.exports = Users;