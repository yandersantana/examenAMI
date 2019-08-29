const mongoose = require('mongoose');
const { Schema } = mongoose;

const productoSchema = new Schema({
    codigo: { type: String, required: false},
    nombreProducto: { type: String, required: false},
    stock: { type: String, required: false },
    descripcion: { type: String, required: false }
});

module.exports = mongoose.model('Producto', productoSchema);