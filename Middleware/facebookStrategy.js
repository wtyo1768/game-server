const Strategy = require('passport-facebook').Strategy;
const config = require('../Config/config')
const UserModel = require('../Model/UserModel');
const PlanetModel = require('../Model/PlanetModel');

const verify = function (accessToken, refreshToken, profile, done) {
    //console.log(profile)
    // const Planet = new PlanetModel();
    const UserData = {
        username: profile.displayName,
        facebookID: profile.id,
        password: 'thisisfacebookaccount',
        email: 'tmp',
        // planets: [{ pid: Planet._id, state: true }],
    }
    console.log(profile)           
     //Planet.save()
    //const User = new UserModel(UserData);
    //User.save()
    //    .catch(err => done(err, null))
    return done(null, profile)
}

module.exports = new Strategy({
    clientID: config.facebook.ID,
    clientSecret: config.facebook.secret,
    callbackURL: config.facebook.callbackURL,
    enableProof: true
}, verify);


