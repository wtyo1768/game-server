var jwt = require('jsonwebtoken')
const expire = { expiresIn: '7d' };
const secret = require('../../config/config').secret;

module.exports = function (req, res) {
  const payload = { _id: req.user._id , owner : req.user.email };
  const token = jwt.sign(payload, secret, expire);
  res.cookie('auth', token, {expires: new Date(Date.now() + 1000*3600*24*7), httpOnly: true })
  logger.info(req.user.username + ' | login')
  res.status(200).end()
}