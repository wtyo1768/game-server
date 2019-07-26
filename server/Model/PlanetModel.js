const mongoose = require('mongoose');
const Types = mongoose.Schema.Types;

var PlanetSchema = new mongoose.Schema({
    owner : { type : String } ,
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
            "militaryBuilding" : {},
            "economicBuilding" : {},
            "specialBuilding" : {
                "special" : {},
                "historical" : {},
            },
        },
    },
    buildingMap: {
        type: Types.Mixed, default: [{
            "id": "k0",
            "name": "stonePortal",
            "coordinateX": 0,
            "coordinateY": 0,
            "status": "done",
            "finishTime": Date.now(),
            "grid": {
                "row": 1,
                "column": 1
            }
        },]
    },
    value: {
        power: { type:  Number, default: 0},
        food: { type: Number, default: 0},
        entertainment: {type: Number, default: 0},
    },
    architectureTechnologyPoint: { type: Number, default: 1 },
    scale: { type: Number, default: 4 },
    population: { type: Object, default: { max: 0, amount: 0, growth: 10 } },
    buffCards: { type: Types.Mixed, default: [] },
    activeBuffCard: { type: Types.Mixed, default: [] }

}, { collection: 'Planet', minimize: false });

module.exports = mongoose.model('Planet', PlanetSchema);