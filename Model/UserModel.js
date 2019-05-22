const mongoose = require('mongoose');
const crypto = require('crypto');

mongoose.set('useFindAndModify', false);

var UserSchema = new mongoose.Schema({
    password: { type: String, required: true },
    email: { type: String },
    username: { type: String, },
    nickname: { type: String, default: this.username },
    coin: { type: Number, default: 3000 },
    diamond: { type: Number, default: 0},

}, { collection: 'User' });

UserSchema.pre('save', function (next) {
    if (this.password) {
        this.password = crypto.createHash('md5').
            update(this.password, 'utf8').digest('hex');
    };
    next();
});
var UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;