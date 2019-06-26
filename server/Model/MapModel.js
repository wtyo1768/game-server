const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

const MapSchema = new mongoose.Schema({
    position: { type: String, },
    type: { type: String, default: 'Feature' },
    properties: {
        type: Object,
        default: {
            maxLat: 0,
            maxLng: 0,
            name: String,
            density: 0,
            respawnTime: null,
            storages: [
                {
                    type: '木頭',
                    amount: Number
                }
            ],
        }
    },
    geometry: {
        type: Object, default: {
            type: 'Polygon',
            coordinates: [
                [[120.22, 23], [120.21, 23],
                [120.21, 22.99], [120.22, 22.99],
                [120.22, 23]]]
        }
    },
    expireAt: {
        type: Date,
        index: { expires: 60 },
    },
})

MapSchema.pre('save', function (next) {
    this.position = `${this.properties.maxLat},${this.properties.maxLng}`
    next();
})

module.exports = mongoose.model('Map', MapSchema);