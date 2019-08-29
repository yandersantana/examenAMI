const Animal = require('../models/animales');

const animalCtrl = {};

animalCtrl.getAnimales = async (req, res, next) => {
    const animales = await Animal.find();
    res.json(animales);
};

animalCtrl.createAnimal = async (req, res, next) => {
    const animales = new Animal({
        idAnimal: req.body.idAnimal,
        edad: req.body.edad
    });
    await animales.save();
    res.json({status: 'Animal created'});
};

animalCtrl.getAnimal = async (req, res, next) => {
    const { id } = req.params;
    const animal = await Animal.findById(id);
    res.json(animal);
};

animalCtrl.editAnimal = async (req, res, next) => {
    const { id } = req.params;
    const animal = {
        idAnimal: req.body.idAnimal,
        edad: req.body.edad
    };
    await Animal.findByIdAndUpdate(id, {$set: animal}, {new: true});
    res.json({status: 'Animal Updated'});
};

animalCtrl.deleteAnimal = async (req, res, next) => {
    await Animal.findByIdAndRemove(req.params.id);
    res.json({status: 'Animal Deleted'});
};

module.exports = animalCtrl;
