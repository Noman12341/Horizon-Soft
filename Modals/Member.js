const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, job: {
        type: String,
        required: true
    }, img: {
        type: String,
        required: true
    }, faceBookLink: {
        type: String,
        default: ""
    }, gmailLink: {
        type: String,
        default: ""
    }, linkedInLink: {
        type: String,
        default: ""
    }, twitterLink: {
        type: String,
        default: ""
    }
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;