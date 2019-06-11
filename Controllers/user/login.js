var jwt = require('jsonwebtoken')
const expire = { expiresIn: '7d' };
const secret = require('../../Config/config').secret;

module.exports = function (req, res) {
  //if(!req.user.isverified)nd();

   // return  res.status(403).e
  const payload = { _id: req.user._id };
  const token = jwt.sign(payload, secret, expire);
  res.cookie('auth', token, {expires: new Date(Date.now() + 1000*3600*24*7), httpOnly: true })
  req.user.token = token;
  console.log('login')
  res.send(req.user);
}