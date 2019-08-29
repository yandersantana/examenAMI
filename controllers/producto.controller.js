const Producto = require('../models/producto');

const productoCtrl = {};

productoCtrl.getProductos = async (req, res, next) => {
    const productos = await Producto.find();
    res.json(productos);
};

productoCtrl.createProducto = async (req, res, next) => {
    const producto = new Producto({
        codigo: req.body.codigo,
        nombreProducto: req.body.nombreProducto,
        stock: req.body.stock,
        descripcion: req.body.descripcion
    });
    await producto.save();
    res.json({status: 'Producto created'});
};

productoCtrl.getProducto= async (req, res, next) => {
    const { id } = req.params;
    const producto = await Producto.findById(id);
    res.json(producto);
};

productoCtrl.editProducto = async (req, res, next) => {
    const { id } = req.params;
    const producto = {
        codigo: req.body.codigo,
        nombreProducto: req.body.nombreProducto,
        stock: req.body.stock,
        descripcion: req.body.descripcion
    };
    await Producto.findByIdAndUpdate(id, {$set: producto}, {new: true});
    res.json({status: 'Producto Updated'});
};

productoCtrl.deleteProducto= async (req, res, next) => {
    await Producto.findByIdAndRemove(req.params.id);
    res.json({status: 'Producto Deleted'});
};

module.exports = productoCtrl;
