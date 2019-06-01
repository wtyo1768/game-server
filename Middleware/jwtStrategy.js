const jwtStrategy = require('passport-jwt').Strategy;
const Extractjwt = require('passport-jwt').ExtractJwt;
const UserModel = require('../Model/UserModel');

const extrctJwtFromCookie = function (req) {
    var token;
    if (req && req.cookies)
        token = req.cookies['token'];
    return token;
}

const opts = {
    // jwtFromRequest : Extractjwt.fromBodyField('token'),
    jwtFromRequest: Extractjwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: require('../Config/config').secret,
}

const strategy = new jwtStrategy(opts, function (payload, done) {
    //console.log(payload)
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
