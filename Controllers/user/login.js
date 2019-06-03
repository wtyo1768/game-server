var jwt = require('jsonwebtoken')
const expire = { expiresIn: '7d' };
const secret = require('../../Config/config').secret;

module.exports = function (req, res) {
  const payload = { _id: req.user._id };
  //const token = 'Bearer ' + jwt.sign(payload, secret, expire);
  const token = jwt.sign(payload, secret, expire);
  res.cookie('auth', token, {expires: new Date(Date.now() + 3600*24*7), httpOnly: true })

  req.user.token = token;
  console.log('login')
 // console.log(req.user)
  res.send(req.user);
}