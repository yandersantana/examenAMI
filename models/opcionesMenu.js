const mongoose = require('mongoose');
const { Schema } = mongoose;

const opcionesMenuSchema = new Schema({
    idOpcionMenu: { type: String, required: true},
    idMenu: { type: String, required: true },
    url: { type: String, required: true },
   
});

module.exports = mongoose.model('OpcionesMenu', opcionesMenuSchema);