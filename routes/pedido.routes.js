const express = require('express');
const router = express.Router();

const pedido = require('../controllers/pedido.controller');

router.get('/', pedido.getPedidos);
router.post('/', pedido.createPedido);
router.get('/:id', pedido.getPedido);
router.put('/:id', pedido.editPedido);
router.delete('/:id', pedido.deletePedido);

module.exports = router;

