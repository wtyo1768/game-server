const mongoose = require('mongoose');

var PlanetSchema = new mongoose.Schema({
    
    pid: { type: String },
    password: { type: String, required: true },
    email: { type: String },
    username: { type: String, },
    nickname: { type: String, default: this.username },
    diamond: { type: Number, default: 0},

}, { collection: 'Planet' });

var PlanetModel = mongoose.model('Planet', PlanetSchema);

module.exports = PlanetModel;