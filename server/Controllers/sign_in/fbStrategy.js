const Strategy = require('passport-facebook').Strategy;
const config = require('../../../config/config')
const UserModel = require('../../Model/UserModel');

const verify = async function (accessToken, refreshToken, profile, done) {
    console.log('yo');
    const User = await UserModel.findOne({ facebookID: profile.id })
    if (!User) {
        const UserData = {
            username: profile.displayName,
            facebookID: profile.id,
            password: 'thisisfacebookaccount',
            email: 'tmp',
        }
        const User = new UserModel(UserData);
        User.save()
            .catch(err => done(err, null))
        return done(null, { _id: User._id })
    }
    else
        return done(null, { _id: User._id })
}

module.exports = new Strategy({
    clientID: config.facebook.ID,
    clientSecret: config.facebook.secret,
    callbackURL: config.facebook.callbackURL,
    enableProof: true
}, verify);


