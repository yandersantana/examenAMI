const Cliente = require('../models/cliente');

const clienteCtrl = {};

clienteCtrl.getClientes = async (req, res, next) => {
    const clientes = await Cliente.find();
    res.json(clientes);
};

clienteCtrl.createCliente = async (req, res, next) => {
    const cliente = new Cliente({
        nombre: req.body.nombre,
        cedula: req.body.cedula
    
    });
    await cliente.save();
    res.json({status: 'Cliente created'});
};

clienteCtrl.getCliente = async (req, res, next) => {
    const { id } = req.params;
    const cliente = await Cliente.findById(id);
    res.json(cliente);
};

clienteCtrl.editCliente = async (req, res, next) => {
    const { id } = req.params;
    const cliente = {
        nombre: req.body.nombre,
        cedula: req.body.cedula
    };
    await Cliente.findByIdAndUpdate(id, {$set: cliente}, {new: true});
    res.json({status: 'Cliente Updated'});
};

clienteCtrl.deleteCliente = async (req, res, next) => {
    await Cliente.findByIdAndRemove(req.params.id);
    res.json({status: 'Cliente Deleted'});
};

module.exports = clienteCtrl;
