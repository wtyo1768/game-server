const Strategy = require('passport-google-oauth20').Strategy;
const config = require('../Config/config');
const UserModel = require('../Model/UserModel');
const PlanetModel = require('../Model/PlanetModel');

function verify(accessToken, refreshToken, profile, done) {
    console.log('googleAuth');
    console.log(accessToken + ' |||| ' + refreshToken);
    return UserModel.findOne({ googleID: profile.id }).then(data => {
        if (!data) {//create One
            // const Planet = new PlanetModel();
            const data = {
                username: profile.displayName,
                email: profile.emails[0].value,
                googleID: profile.id,
                password: "itsagoogleaccount",
                // planets: [{ pid: Planet._id, state: true }]
            }
            const User = new UserModel(data);
            //Planet.save()
            console.log(profile)
            //User.save()
            //    .catch(err => done(err, null));
        }
        done(null, profile);
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