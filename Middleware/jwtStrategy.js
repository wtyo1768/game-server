const jwtStrategy = require('passport-jwt').Strategy;
// const Extractjwt = require('passport-jwt').ExtractJwt;
const UserModel = require('../Model/UserModel');

const extrctJwtFromCookie = function (req) {
    let token =  req.cookies.auth
    console.log(token)
    return token;
}

const opts = {
    jwtFromRequest : extrctJwtFromCookie,
    //jwtFromRequest: Extractjwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: require('../Config/config').secret,
}

const strategy = new jwtStrategy(opts, function (payload, done) {
    UserModel.findById(payload._id  ,function (err, user) {
        if (err)
            return done(err, false, err);
        if (user){
            user = user.toObject();
            user.password = user.__v = undefined;
            console.log('jwt')
            return done(null, user);
        }
        else
            return done(null, false, 'Payload err');
    })
})

module.exports = strategy;
