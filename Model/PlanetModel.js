const mongoose = require('mongoose');

var PlanetSchema = new mongoose.Schema({

    name: String,
    type: String,
    level: { type: Number, default: 1 },
    experience: { type: Number, default: 0 },
    positionX: Number,
    positionY: Number,
    architectureTechnology: { type: mongoose.Schema.Types.Mixed },
    buildingMap: { type: mongoose.Schema.Types.Mixed, default: [] },

}, { collection: 'Planet' });

var PlanetModel = mongoose.model('Planet', PlanetSchema);

module.exports = PlanetModel;