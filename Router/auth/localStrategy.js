const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../../Model/UserModel');
const crypto = require('crypto');

const localStrategy = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    function (username, password, done) {
        console.log('--'+password);
        password = crypto.createHash('md5').
        update(password, 'utf8').digest('hex');
        return UserModel.findOne({ email: username })
            .then(user => {
                if (!user) {
                    return done(null, false, { message: 'Incorrect email' });
                }
                else if (user.password != password)
                    return done(null, false , {message : 'Incorrect email or password'})
                else
                    return done(null, user, { message: 'Logged In Successfully' });
            })
            .catch(err => done(err));
    }
);

module.exports = localStrategy;