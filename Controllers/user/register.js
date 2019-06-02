var UserModel = require('../../Model/UserModel');
var PlanetModel = require('../../Model/PlanetModel');
var crypto = require('crypto');

const appInsights = require('applicationinsights');
const telemetry = appInsights.defaultClient;

module.exports = async function (req, res) {
    let password = crypto.createHash('md5').
        update(req.body.password, 'utf8').digest('hex');

    const Planet = new PlanetModel();
    var UserData = {
        username: req.body.username,
        email: req.body.email,
        password: password,
        planets: [{ pid: Planet._id }]
    }
    const User = new UserModel(UserData);
    const searchRes = await UserModel.findOne({ email: req.body.email });
    if (searchRes)
        return res.status(204).send('dunlicate account!')

    telemetry.trackEvent(UserData.username + "Register");

    User.save()
        .then(() => {
            Planet.save();
            return res.status(201).end();
        })
        .catch(err => res.status(400).send(err))
}