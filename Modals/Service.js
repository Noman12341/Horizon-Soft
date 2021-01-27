const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, text: {
        type: String,
        required: true
    }, img: {
        type: String,
        required: true
    }
});

const Service = mongoose.model('Service', ServiceSchema);

module.exports = Service;