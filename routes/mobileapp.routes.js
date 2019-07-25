const express = require('express');
const router = express.Router();

const mobileapp = require('../controllers/mobileapp.controller');

router.get('/:id', mobileapp.getUsuarioData);
//router.post('/', mobileapp.createUsuario);
router.get('/data/:id', mobileapp.getMatriculaData);

//router.put('/:id', mobileapp.editUsuario);

router.put('/data/:id', mobileapp.restarSaldo);


module.exports = router;
