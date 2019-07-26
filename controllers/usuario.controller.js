const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');

mongoose.set('useCreateIndex',true);

const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (req, res, next) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
};

usuarioCtrl.createUsuario = async (req, res, next) => {
    const usuario = new Usuario({
        idPersona: req.body.idPersona,
        idLogros: req.body.idLogros,
        idRol: req.body.idRol,
        idInstitucion: req.body.idInstitucion,
        NroBotellas: req.body.NroBotellas,
        saldoActual: req.body.saldoActual,
        saldoTotal: req.body.saldoTotal,
        UrlFoto: req.body.UrlFoto,
        user: req.body.user,
      //  password: req.body.password
        password: bcrypt.hashSync(req.body.password),
        email: req.body.email
    });
    await usuario.save();
    res.json({status: 'Usuario created'});
};

usuarioCtrl.getUsuario = async (req, res, next) => {
    const { id } = req.params;
    const usuario = await Usuario.findById(id);
    res.json(usuario);
};

usuarioCtrl.editUsuario = async (req, res, next) => {
    const { id } = req.params;
    const usuario = {

        idPersona: req.body.idPersona,
        idLogros: req.body.idLogros,
        idRol: req.body.idRol,
        idInstitucion: req.body.idInstitucion,
        NroBotellas: req.body.NroBotellas,
        saldoActual: req.body.saldoActual,
        saldoTotal: req.body.saldoTotal,
        UrlFoto: req.body.UrlFoto,
        user: req.body.user,
       // password: req.body.password
        password:bcrypt.hashSync(req.body.password),
        email:req.body.email
    };
    await Usuario.findByIdAndUpdate(id, {$set: usuario}, {new: true});
    res.json({status: 'Usuario Updated'});
};

usuarioCtrl.deleteUsuario = async (req, res, next) => {
    await Usuario.findByIdAndRemove(req.params.id);
    res.json({status: 'Usuario Deleted'});
};

module.exports = usuarioCtrl;