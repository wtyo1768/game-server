const mongoose = require('mongoose');
const Types = mongoose.Schema.Types;

var PlanetSchema = new mongoose.Schema({

    name: { type: String, default: "赫克斯" },
    type: { type: String, default: "預設" },

    level: { type: Number, default: 1 },
    experience: { type: Number, default: 0 },

    positionX: { type: Number, default: Math.floor(Math.random() * 100000) /100 },
    positionY: { type: Number, default: Math.floor(Math.random() * 100000) /100 },

    architectureTechnology: {
        type: Types.Mixed, default:
        {
            "commonBuilding": {
                "c0": true,
            },
            "militaryBuilding" : { 'm0': false },
            "specialBuilding" : { 's0': false },
            "economicBuilding" : { 'e0': false }
        },
    },
    buildingMap: {
        type: Types.Mixed, default: [{
            "id": "k0",
            "name": "stonePortal",
            "coordinateX": 0,
            "coordinateY": 0,
            "status": "done",
            "finishTime": Date.now()
        },]
    },
    architectureTechnologyPoint: { type: Number, default: 0 },
    scale: { type: Number, default: 4 },
    population: { type: Object, default: { max: 10, amount: 0, growth: 0 } },
    buffCards: { type: Types.Mixed, default: [] },
    activeBuffCard: { type: Types.Mixed, default: [] }

}, { collection: 'Planet' });

module.exports = mongoose.model('Planet', PlanetSchema);