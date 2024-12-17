const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        ref: "User"
    },
});

module.exports = mongoose.model('Brand', brandSchema);
