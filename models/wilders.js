const mongoose = require('mongoose');
const Schema = mongoose.Schema
const Wilders = new Schema({
    name: String,
    lastname: String,
    age: Number
})
module.exports = mongoose.model('wilders', Wilders);