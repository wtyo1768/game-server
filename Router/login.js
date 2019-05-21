var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var passport = require('passport');
var jwt = require('jsonwebtoken')

router.post('/login', urlencodedParser, function (req, res, next) {

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
      // generate a signed son web token with the contents of user object and return it in the response
      const token = jwt.sign({ _id: user._id }, '!!!--kyronus forever--!!!');
      return res.json({ success:true, token });
    });
  })(req, res);
})

module.exports = router;