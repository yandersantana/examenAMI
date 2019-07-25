const mongoose = require ('mongoose')
const Schema = mongoose.Schema;
const Usuario = require('../../models/usuario')
mongoose.set('useCreateIndex',true) //solucionar advertencia por consola
const userSchema = new Schema({
    user:{
        type:String,
        required:true,
        trim:true
    },
    password:{
      type:String,
      required:true,
      trim:true
    }
    idRol:{
        type:String,
        require:true,
        trim:true
    }
},{
    timestamps:true
}

)

module.exports=userSchema