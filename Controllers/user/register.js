var UserModel = require('../../Model/UserModel');

module.exports =  async function (req, res, next) {
    var UserData = {
        'account': req.body.account,
        'email': req.body.email,
        'password': req.body.password
    }
    const user = new UserModel(UserData);
    const searchRes = await UserModel.findOne({ email: req.body.email });
    if (searchRes)
        return res.send({ success: false, info: 'dunlicate account!' })
    user.save(function (err) {
        if (err) {
            return res.send({ success: false, info: 'error in save' });
        }
        else {
            return res.send({ success: true, info: 'success' });
        }
    });
}