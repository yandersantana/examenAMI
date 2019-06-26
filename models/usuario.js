const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuarioSchema = new Schema({
    idUser: { type: String, required: false},
    idPersona: { type: String, required: false },
    idLogros: { type: String, required: false },
    idRol: { type: String, required: false},
    idInstitucion:{type:String ,required:false},
    NroBotellas:{type:Number,required:false},
    saldoTotal:{type:Number,required:false},
    Urlfoto:{type:String,required:false},
    user:{type:String,required:false},
    password:{type:String,required:false}

});

module.exports = mongoose.model('Usuario', usuarioSchema);