var jwt = require('jsonwebtoken')
const expire = { expiresIn: 3600 };
const secret = require('../../Config/config').secret;

module.exports = function (req, res) {
  const payload = { _id: req.user._id };
  const token = 'Bearer ' + jwt.sign(payload, secret, expire)

  res.setHeader('Set-Cookie', 'token=' + token + ';HttpOnly')
  res.send({ success: true, info: req.user, token: token })
}