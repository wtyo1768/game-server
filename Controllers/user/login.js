var passport = require('passport');
var jwt = require('jsonwebtoken')

module.exports = function (req, res) {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: info,
        user: user
      });
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }
      // a signed jwt with the contents of user_id and secret
      const token = jwt.sign({ _id: user._id }, '!!!--kyronus forever--!!!');
      return res.json({ success:true, token });
    });
  })(req, res);
}