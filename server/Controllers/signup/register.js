var UserModel = require('../../Model/UserModel');
var crypto = require('crypto');

var jwt = require('jsonwebtoken')
const expire = { expiresIn: '7d' };
const secret = require('../../config/config').secret;

module.exports = async function (req, res) {
    let password = crypto.createHash('md5').
        update(req.body.password, 'utf8').digest('hex');

    var UserData = {
        username: req.body.username,
        email: req.body.email,
        password: password,
    }
    const User = new UserModel(UserData);
    const searchRes = await UserModel.findOne({ email: req.body.email });
    return searchRes ? res.status(406).end()
        : User.save()
            .then(() => {
                //require('../auth/email.auth').verifyEmail(UserData);
                const payload = { _id: User._id };
                const token = jwt.sign(payload, secret, expire);
                res.cookie('auth', token, { expires: new Date(Date.now() + 1000 * 3600 * 24 * 7), httpOnly: true })

                return res.status(201).send(User);
            })
            .catch(err =>{ 
                res.status(400).send(err)
                logger.error(err)
            })
}