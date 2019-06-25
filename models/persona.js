const mongoose = require('mongoose');
const { Schema } = mongoose;

const personaSchema = new Schema({
    idPersona: { type: String, required: true},
    idInstitucion: { type: String, required: true },
    cedula: { type: String, required: true },
    nombre: { type: String, required: true},
    apellido:{type:String ,required:true}
});

module.exports = mongoose.model('Persona', personaSchema);