const logro = require('../models/logro');

const logroCtrl = {};

logroCtrl.getlogros = async (req, res, next) => {
    const logros = await logro.find();
    res.json(logros);
};

logroCtrl.createlogro = async (req, res, next) => {
    const logro = new logro({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    await logro.save();
    res.json({status: 'logro created'});
};

logroCtrl.getlogro = async (req, res, next) => {
    const { id } = req.params;
    const logro = await logro.findById(id);
    res.json(logro);
};

logroCtrl.editlogro = async (req, res, next) => {
    const { id } = req.params;
    const logro = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await logro.findByIdAndUpdate(id, {$set: logro}, {new: true});
    res.json({status: 'logro Updated'});
};

logroCtrl.deletelogro = async (req, res, next) => {
    await logro.findByIdAndRemove(req.params.id);
    res.json({status: 'logro Deleted'});
};

module.exports = logroCtrl;