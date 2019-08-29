const Pedido = require('../models/pedido');

const pedidoCtrl = {};

pedidoCtrl.getPedidos = async (req, res, next) => {
    const pedidos = await Pedido.find();
    res.json(pedidos);
};

pedidoCtrl.createPedido = async (req, res, next) => {
    const pedido = new Pedido({
        codigo: req.body.codigo,
        nombreCliente: req.body.nombre,
        cantidad: req.body.cantidad,
        nombreProducto: req.body.nombreProducto,
        tipoPedido: req.body.tipoPedido,
        estado: req.body.estado,
        fhPedido: req.body.fhPedido,
        fhEntrega: req.body.fhEntrega,
    });
    await pedido.save();
    res.json({status: 'Pedido created'});
};

pedidoCtrl.getPedido= async (req, res, next) => {
    const { id } = req.params;
    const pedido = await Pedido.findById(id);
    res.json(pedido);
};

pedidoCtrl.editPedido = async (req, res, next) => {
    const { id } = req.params;
    const pedido = {
        codigo: req.body.codigo,
        nombreCliente: req.body.nombre,
        cantidad: req.body.cantidad,
        nombreProducto: req.body.nombreProducto,
        tipoPedido: req.body.tipoPedido,
        estado: req.body.estado,
        fhPedido: req.body.fhPedido,
        fhEntrega: req.body.fhEntrega,
    };
    await Pedido.findByIdAndUpdate(id, {$set: pedido}, {new: true});
    res.json({status: 'Pedido Updated'});
};

pedidoCtrl.deletePedido= async (req, res, next) => {
    await Pedido.findByIdAndRemove(req.params.id);
    res.json({status: 'Pedido Deleted'});
};

module.exports = pedidoCtrl;
