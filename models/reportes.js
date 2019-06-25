const mongoose = require('mongoose');
const { Schema } = mongoose;

const reportesSchema = new Schema({
    idReporte: { type: String, required: true},
    idInstitucion: { type: String, required: true },
    fecha: { type: Date, required: true },
    NroBotellas:{type:Number,required:true}

});

module.exports = mongoose.model('Reportes', reportesSchema);