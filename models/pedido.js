const mongoose = require('mongoose');
const { Schema } = mongoose;

const pedidoSchema = new Schema({
    codigo: { type: String, required: false},
    nombreCliente: { type: String, required: false},
    cantidad: { type: String, required: false },
    nombreProducto: { type: String, required: false },
    tipoPedido: { type: String, required: false },
    estado: { type: String, required: false },
    fhPedido: { type: String, required: false },
    fhEntrega: { type: String, required: false }
   
});

module.exports = mongoose.model('Pedido', pedidoSchema);