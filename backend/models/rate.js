const mongoose = require('mongoose');

const rateSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    multiplier: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Rate', rateSchema);