const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: {type: String, required: true},
    artist: {type: String, required: true},
    // album:{type: mongoose.Schema.Types.ObjectId, ref: 'product'},
    Duration : {type: String, required: true}
})

module.exports = mongoose.model("songs", songSchema); // songs