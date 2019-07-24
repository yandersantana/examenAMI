const Usuario = require('../models/usuario');
const Persona = require('../models/persona');

const mobileAppCtrl = {};

mobileAppCtrl.getUsuarioData = async (req, res, next) => {
    
    const { id } = req.params;
    //const usuario = await Usuario.findById(id);
    //{ 'username': userName }
    //const usuarioData = await Usuario.find({where: {'user':id}, select: ['NroBotellas', 'saldoTotal','saldoActual']});
    //const usuarioData = await Usuario.find({ 'user': id });
    const usuarioData = await Usuario.find({ 'user': id }).select({ user: 1, NroBotellas: 1, saldoTotal: 1, saldoActual: 1 });
    const dataUsuario={
        usuario:usuarioData.user,
        botellas:usuarioData.NroBotellas,
        saldoTotal:usuarioData.saldoTotal,
        saldoActual:usuarioData.saldoActual
    }

    //console.log(usuarioData.id)
    //res.send({dataUsuario});
    res.json(usuarioData);
    //res.json(usuarioData.user, usuarioData.nroBotellas, usuarioData.saldoTotal, usuarioData.saldoActual);


};
//la puta madre
mobileAppCtrl.getMatriculaData = async (req, res, next) => {
    const { matricula } = req.params;
    //const usuarioData = await Usuario.findOne({where: {idInstitucion:matricula}, select: ['nroBotellas', 'saldoTotal','saldoActual']});
    const usuarioData = await Usuario.find({ 'user': matricula }).select({ idInstitucion: 1, NroBotellas: 1, saldoTotal: 1, saldoActual: 1 });
 //const personaData = await Persona.findOne({where: {idInstitucion:matricula}, select: ['nombre', 'apellido']});
 //const personaData = await Persona.find({ 'idInstitucion': matricula }).select({ nombre: 1, apellido: 1});
    //res.json({nombre:personaData.nombre, apellido:personaData.apellido, nroBotellas:usuarioData.nroBotellas, saldoTotal:usuarioData.saldoTotal});
    console.log(usuarioData);
    res.json(usuarioData);
};

//mobileAppCtrl.getSaldoResponse = async (req, res, next) => {
//    const { matricula } = req.params;
//    const usuarioData = await Usuario.findOne({where: {idInstitucion:matricula}, select:['saldoTotal']});
//    res.json(usuarioData);
//};


module.exports = mobileAppCtrl;
