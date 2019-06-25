const mongoose = require('mongoose');
const { Schema } = mongoose;

const menuSchema = new Schema({
    idMenu: { type: String, required: true},
    idRol: { type: String, required: true },

});

module.exports = mongoose.model('Menu', menuSchema);