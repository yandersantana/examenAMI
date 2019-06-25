const mongoose = require('mongoose');
const { Schema } = mongoose;

const rolesSchema = new Schema({
    idRol: { type: String, required: true},
    tiporol: { type: String, required: true },
    descripcion: { type: String, required: true }
   
   
});

module.exports = mongoose.model('Roles', rolesSchema);