const mongoose = require('mongoose');
const crypto = require('crypto');

mongoose.set('useFindAndModify', false);

var UserSchema = new mongoose.Schema({

    email: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String, default: "郭家銘" },
    nickname: { type: String, default: this.username },
    coin: { type: Number, default: 3000 },
    diamond: { type: Number, default: 0 },
    resourceMax: { type: Number, default: 3000 },
    resources: {
        type: mongoose.Schema.Types.Mixed, default: [{ type: '木頭', amount: 1000 }, { type: '石頭', amount: 1000 },
        { type: '鋼鐵', amount: 1000 }, { type: '銅礦', amount: 1000 },
        { type: '墨金屬', amount: 1000 }, { type: '鍨金屬', amount: 1000 },
        { type: '氪金屬', amount: 1000 }, { type: '銝金屬', amount: 1000 }],
    },
    baggage: { type: mongoose.Schema.Types.Mixed },
    achievements: {
        type: mongoose.Schema.Types.Mixed, default: [{
            title: '星際拓荒者', brief: '擁有第一個星球', state: true
        }]
    },
    planets: { type: mongoose.Schema.Types.Mixed, default: [{ pid: null, state: true }] },
    task: { type: Array, default: [0] },
    mission: { type: mongoose.Schema.Types.Mixed },


}, { collection: 'User' });

UserSchema.pre('save', function (next) {
    if (this.password) {
        this.password = crypto.createHash('md5').
            update(this.password, 'utf8').digest('hex');
    };
    next();
});

UserSchema.post('find', function (res) {
    console.log('hey')
    console.log(res)
    this.__v = undefined;
    next();
});

var UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;