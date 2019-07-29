const express = require('express');
const router = express.Router();

const logro = require('../controllers/logro.controller');

router.get('/', logro.getlogros);
router.post('/', logro.createlogro);
router.get('/:id', logro.getlogro);
router.put('/:id', logro.editlogro);
router.delete('/:id', logro.deletelogro);

module.exports = router;