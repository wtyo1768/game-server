var UserModel = require('../../Model/UserModel');
var PlanetModel = require('../../Model/PlanetModel');

module.exports = async function (req, res) {
    var UserData = {
        'email': req.body.email,
        'password': req.body.password
    }
    const user = new UserModel(UserData);
    const searchRes = await UserModel.findOne({ email: req.body.email });
    if (searchRes)
        return res.send({ success: false, info: 'dunlicate account!' })
    const planet_data = new PlanetModel();
    user.planets[0].pid = planet_data._id;
        user.save(async function (err) {
        if (err) {
            return res.send({ success: false, info: err });
        }
        else {
            await planet_data.save();
            return res.send({ success: true, info: 'success' });
        }
    });
}