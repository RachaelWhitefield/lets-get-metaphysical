const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Favorites = new Schema({
    favorite_name: {
        type: String
    },
    favorite_color: {
        type: String
    },
    favorite_chakra: {
        type: String
    },
    favorite_metaProps: {
        type: String
    },
    favorite_image: {
        type: String
    }

});
module.exports = mongoose.model('Favorites', Favorites);