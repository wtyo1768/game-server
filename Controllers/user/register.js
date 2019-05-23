var UserModel = require('../../Model/UserModel');
var PlanetModel = require('../../Model/PlanetModel');

module.exports = async function (req, res, next) {
    var UserData = {
        'email': req.body.email,
        'password': req.body.password
    }
    const user = new UserModel(UserData);
    const searchRes = await UserModel.findOne({ email: req.body.email });
    if (searchRes)
        return res.send({ success: false, info: 'dunlicate account!' })
    user.save(async function (err) {
        if (err) {
            return res.send({ success: false, info: err });
        }
        else {
            const planet_data = new PlanetModel({ _id: user._id });
            await planet_data.save();
            return res.send({ success: true, info: 'success' });
        }
    });
}