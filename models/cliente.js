const mongoose = require('mongoose');
const { Schema } = mongoose;

const clienteSchema = new Schema({
    nombre: { type: String, required: false},
    cedula: { type: String, required: false }
   
});

module.exports = mongoose.model('Cliente', clienteSchema);