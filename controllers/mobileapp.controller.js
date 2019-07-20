const Persona = require('../models/persona');
const Usuario = require('../models/usuario');

const mobileAppCtrl = {};

mobileAppCtrl.getUsuarioData = async (req, res, next) => {
    const { user } = req.params;
    //const usuario = await Usuario.findById(id);
    const usuarioData = await Usuario.findOne({where: {name:user}, select: ['nroBotellas', 'saldoTotal']});
    res.json(usuarioData);
};

mobileAppCtrl.getMatriculaData = async (req, res, next) => {
    const { matricula } = req.params;
    const usuarioData = await Usuario.findOne({where: {idInstitucion:matricula}, select: ['nroBotellas', 'saldoTotal']});

 const personaData = await Persona.findOne({where: {idInstitucion:matricula}, select: ['nombre', 'apellido']});

    res.json({nombre:personaData.nombre, apellido:personaData.apellido, nroBotellas:usuarioData.nroBotellas, saldoTotal:usuarioData.saldoTotal});
};

//mobileAppCtrl.getSaldoResponse = async (req, res, next) => {
//    const { matricula } = req.params;
//    const usuarioData = await Usuario.findOne({where: {idInstitucion:matricula}, select:['saldoTotal']});
//    res.json(usuarioData);
//};


module.exports = mobileAppCtrl;
