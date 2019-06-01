const mongoose = require('mongoose');
const Types = mongoose.Schema.Types;

var PlanetSchema = new mongoose.Schema({

    name: String,
    type: String,
    level: { type: Number, default: 1 },
    experience: { type: Number, default: 0 },
    positionX: Number,
    positionY: Number,
    architectureTechnology: { type: Types.Mixed  },
    buildingMap: { type: Types.Mixed , default: [] },

}, { collection: 'Planet' });

module.exports = mongoose.model('Planet', PlanetSchema);