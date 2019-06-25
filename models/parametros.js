const mongoose = require('mongoose');
const { Schema } = mongoose;

const parametrosSchema = new Schema({
    idParametro: { type: String, required: true},
    nombreParametro: { type: String, required: true },
    valor: { type: String, required: true }
});

module.exports = mongoose.model('Parametros', parametrosSchema);