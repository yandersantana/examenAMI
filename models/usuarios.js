const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuariosSchema = new Schema({
    idUser: { type: String, required: true},
    idPersona: { type: String, required: true },
    idLogros: { type: String, required: true },
    idRol: { type: String, required: true},
    idInstitucion:{type:String ,required:true},
    NroBotellas:{type:Number,required:true},
    saldoTotal:{type:Number,required:true},
    Urlfoto:{type:String,required:true},
    user:{type:String,required:true},
    password:{type:String,required:true}

});

module.exports = mongoose.model('Usuarios', usuariosSchema);