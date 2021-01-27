const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, job: {
        type: String,
        required: true
    }, review: {
        type: String,
        required: true
    }, rating: {
        type: Number,
        required: true
    }, img: {
        type: String,
        required: true
    }
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;