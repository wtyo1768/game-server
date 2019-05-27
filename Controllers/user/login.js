var jwt = require('jsonwebtoken')
const expire = { expiresIn: '7d' };
const secret = require('../../Config/config').secret;

module.exports = function (req, res) {
  const payload = { _id: req.user._id };
  const token = 'Bearer ' + jwt.sign(payload, secret, expire);
  //res.setHeader("token", token);
  //res.cookie('token', token, { expires: new Date(Date.now() + 900000000), httpOnly: false })
  var obj = req.user.toObject();
  obj.token = token;
  res.send(obj);
}