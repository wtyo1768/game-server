const Strategy = require('passport-google-oauth20').Strategy;
const config = require('../../config/config');
const UserModel = require('../Model/UserModel');

function verify(accessToken, refreshToken, profile, done) {
    console.log(accessToken + ' |||| ' + refreshToken);
    return UserModel.findOne({ googleID: profile.id }).then(doc => {
        if (!doc) {
            //create One
            const data = {
                username: profile.displayName,
                email: profile.emails[0].value,
                googleID: profile.id,
                password: "itsagoogleaccount",
            }
            var User = new UserModel(data);
            return User.save()
                .then(() => done(null, { _id: User._id }))
                .catch(err => done(err, null));
        }
        return done(null, { _id: doc._id });
    })
        .catch(err => done(err, null));
}
var GoogleStrategy = new Strategy(
    {
        clientID: config.google.clientID,
        clientSecret: config.google.clientSecret,
        callbackURL: config.google.callbackURL,
    }, verify);

module.exports = GoogleStrategy;