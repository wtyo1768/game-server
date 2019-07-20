const Strategy = require('passport-facebook').Strategy;
const config = require('../../config/config')
const UserModel = require('../../Model/UserModel');

const verify = async function (accessToken, refreshToken, profile, done) {
    logger.info('fb');
    console.log(profile)
    const User = await UserModel.findOne({ facebookID: profile.id })
    if (!User) {
        const UserData = {
            username: profile.name.familyName + profile.name.givenName,
            facebookID: profile.id,
            password: 'thisisfacebookaccount',
            email: profile.emails[0].value,
        }
        const User = new UserModel(UserData);
        User.save()
            .catch(err => done(err, null))
        return done(null, User)
    }
    else
        return done(null, User)
}

module.exports = new Strategy({
    clientID: config.facebook.ID,
    clientSecret: config.facebook.secret,
    callbackURL: config.facebook.callbackURL,
    enableProof: true,
    profileFields: ['id', 'emails', 'name'] 

}, verify);


