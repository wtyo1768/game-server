const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../Model/UserModel');
const crypto = require('crypto');

const verify = function (username, password, done) {
    password = crypto.createHash('md5').
        update(password, 'utf8').digest('hex');
    return UserModel.findOne({ email: username }).then(user => {
        if (!user) {
            return done(null, false, 404);
        }
        else if (user.password != password)
            return done(null, false, 401)
        else {
            user = user.toObject();
            user.password = user.__v = undefined;
            return done(null, user);
        }
    })
        .catch(err => done(err));
}

const opts = {
    usernameField: 'email',
    passwordField: 'password'
}

module.exports = new LocalStrategy(opts, verify);