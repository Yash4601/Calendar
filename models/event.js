const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: String,
    date: Date
})

module.exports = mongoose.model('Event', eventSchema);