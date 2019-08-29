const mongoose = require('mongoose');
const { Schema } = mongoose;

const animalSchema = new Schema({
    idAnimal: { type: String, required: false},
    edad: { type: String, required: false }
   
});

module.exports = mongoose.model('Animal', animalSchema);