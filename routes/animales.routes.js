const express = require('express');
const router = express.Router();

const persona = require('../controllers/animal.controller');

router.get('/', persona.getAnimales);
router.post('/', persona.createAnimal);
router.get('/:id', persona.getAnimal);
router.put('/:id', persona.editAnimal);
router.delete('/:id', persona.deleteAnimal);

module.exports = router;

