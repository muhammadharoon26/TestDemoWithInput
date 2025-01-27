const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Data', dataSchema);