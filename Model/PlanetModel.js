const mongoose = require('mongoose');
const Types = mongoose.Schema.Types;

var PlanetSchema = new mongoose.Schema({

    name: { type: String, default: "赫克斯" },
    type: { type: String, default: "預設" },

    level: { type: Number, default: 1 },
    experience: { type: Number, default: 0 },

    positionX: { type: Number, default: 23.1 },
    positionY: { type: Number, default: 123.4 },

    architectureTechnology: {
        type: Types.Mixed, default:
        {
            "commonBuilding": {
                "c0": true,
            },
            "militaryBuilding": {},
            "specialBuilding": {},
            "economicBuilding": {}
        },
    },
    buildingMap: { type: Types.Mixed, default: [] },
    architectureTechnologyPoint: { type: Number, default: 0 },
    scale: { type: Number, default: 3 },
    population: { type: Object, default: { max: 10, amount: 0, growth: 0 } },
    buffCards: { type: Types.Mixed, default: [] },


}, { collection: 'Planet' });

module.exports = mongoose.model('Planet', PlanetSchema);