const Strategy = require('passport-google-oauth20').Strategy;
const config = require('../Config/config');
const UserModel = require('../Model/UserModel');

var GoogleStrategy = new Strategy(
    {
        clientID: config.google.clientID,
        clientSecret: config.google.clientSecret,
        callbackURL: config.google.callbackURL,
    },
    async function (accessToken, refreshToken, profile, done) {
        console.log('googleAuth');
        console.log(accessToken + ' |||| ' + refreshToken);
        const data = await UserModel.findOne({ googleID: profile.id })
        .catch(err => done(err,null));
        if (!data) {//create One
            const data = {
                username: profile.displayName,
                email: profile.emails[0].value,
                googleID: profile.id,
                password: "itsagoogleaccount",
                planets: [{ pid: Planet._id, state: true }]
            }
            const User = new UserModel(data);
            User.save()
                .catch(err => done(err, null));
        }
        done(null, profile);
    });

module.exports = GoogleStrategy;