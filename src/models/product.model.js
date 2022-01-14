const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    album: {type: String, required: true},
    genre: {type: String, required: true},
    year: {type: String, required: true},
    songs:[{type: mongoose.Schema.Types.ObjectId,ref: 'songs'} ],
    image_urls: [{type: String, required: false}]
})

module.exports = mongoose.model("product", productSchema); // products