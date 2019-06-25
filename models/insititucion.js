const mongoose = require('mongoose');
const { Schema } = mongoose;

const institucionSchema = new Schema({
    idInstitucion: { type: String, required: true},
    nombre: { type: String, required: true },
    ruc: { type: String, required: true },
    descripcion: { type: String, required: true },
    urlfoto: { type: String, required: true },
   
});

module.exports = mongoose.model('Institucion', institucionSchema);