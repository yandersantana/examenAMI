const express = require('express');
const router = express.Router();

const mobileapp = require('../controllers/mobileapp.controller');

router.get('/:id', mobileapp.getUsuarioData);
//router.post('/', mobileapp.createUsuario);
router.get('/matricula/:id', mobileapp.getMatriculaData);
//router.put('/:id', mobileapp.editUsuario);


module.exports = router;
