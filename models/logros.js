const mongoose = require('mongoose');
const { Schema } = mongoose;

const opcionesMenuSchema = new Schema({
    idLogro: { type: String, required: true},
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    minbotella:{type:Number,required:true},
    maxbotella:{type:Number,required:true},
    idInstitucion:{types:String,required:true}
   
});

module.exports = mongoose.model('OpcionesMenu', opcionesMenuSchema);