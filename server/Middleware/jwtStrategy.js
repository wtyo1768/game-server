const jwtStrategy = require('passport-jwt').Strategy;
const UserModel = require('../Model/UserModel');

const extrctJwtFromCookie = function (req) {
    let token =  req.cookies.auth
    return token;
}

const opts = {
    jwtFromRequest : extrctJwtFromCookie,
    secretOrKey: require('../config/config').secret,
}

const strategy = new jwtStrategy(opts, function (payload, done) {
    UserModel.findById(payload._id  ,function (err, user) {
        if (err)
            return done(err, false, 500);
        if (user){
            // - Convert Mongoose Document type to js object
            // - So we can delete the user's secret info 
            user = user.toObject();
            user.password = user.__v = undefined;
            return done(null, user);
        }
        else
            return done(null, false, 404);
    })
})

module.exports = strategy;
