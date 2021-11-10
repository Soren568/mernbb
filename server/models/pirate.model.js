const mongoose = require('mongoose');
const PirateSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "The pirate must have a first name."]
    },
    rank:{
        type: String,
        required: [true, "The pirate must have a rank."],
    },
    catchphrase:{
        type: String,
        required: [true, "The pirate must have a catchphrase."],
        "default": "undecided"
    },
    imgUrl:{
        type: String,
        required: [true, "The pirate must have an image URL."],
    },
    treasures:{
        type: Number,
        required: [true, "The pirate must have a treasure amount."],

    },
    pegleg:{
        type: Boolean,
        "default" : true
    },
    eyepatch:{
        type: Boolean,
        "default" : true
    },
    hook:{
        type: Boolean,
        "default" : true
    }
}, { timestamps: true });
module.exports.Pirate = mongoose.model('Pirate', PirateSchema);

