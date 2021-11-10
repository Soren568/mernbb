const {Pirate} = require('../models/pirate.model');


module.exports.findAllPirates = (req, res) =>{
    Pirate.find().collation({locale:'en',strength: 2}).sort({name:1})
    .then(allPirates => res.json({pirates: allPirates}))
    .catch(err => res.status(400).json(err));
}

module.exports.findOnePirate = (req, res) =>{
    Pirate.findOne({_id: req.params.id})
    .then(onePirate => res.json({pirate: onePirate}))
    .catch(err => res.status(400).json(err));
}

module.exports.createPirate = (req, res) =>{
    Pirate.create(req.body)
    .then(newPirate => res.json({pirate: newPirate}))
    .catch(err => res.status(400).json(err));
}

module.exports.updatePirate = (req, res) => {
    Pirate.findOneAndUpdate({ _id: req.params.id}, req.body, {new: true, useFindAndModify: true, runValidators: true})
    .then(updatedPirate => res.json({pirate: updatedPirate}))
    .catch(err => res.status(400).json(err));
}

module.exports.deletePirate = (req, res) => {
    Pirate.deleteOne({_id: req.params.id})
    .then(result => res.json({ result: result }))
    .catch(err => res.status(400).json(err));
}