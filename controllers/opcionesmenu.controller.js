const Opcionesmenu = require('../models/opcionesMenu');

const OpcionesmenuCtrl = {};

OpcionesmenuCtrl.getEmployees = async (req, res, next) => {
    const opciones = await Opcionesmenu.find();
    res.json(opciones);
};

OpcionesmenuCtrl.createOpcionesmenu = async (req, res, next) => {
    const opciones = new Opcionesmenu({
        url: req.body.url
    });
    await opciones.save();
    res.json({status: 'Opcionesmenu created'});
};

OpcionesmenuCtrl.getOpcionesmenu = async (req, res, next) => {
    const { id } = req.params;
    const opciones = await Opcionesmenu.findById(id);
    res.json(opciones);
};

OpcionesmenuCtrl.editOpcionesmenu = async (req, res, next) => {
    const { id } = req.params;
    const opciones = {
        url: req.body.url
    };
    await Opcionesmenu.findByIdAndUpdate(id, {$set: opciones}, {new: true});
    res.json({status: 'Opciones menu Updated'});
};

OpcionesmenuCtrl.deleteOpcionesmenu = async (req, res, next) => {
    await Opcionesmenu.findByIdAndRemove(req.params.id);
    res.json({status: 'Opciones menu Deleted'});
};

module.exports = OpcionesmenuCtrl;