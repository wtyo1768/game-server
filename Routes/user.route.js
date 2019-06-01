const express = require('express');
const router = express.Router();
const passport = require('passport');
const UserController = require('../Controllers/user/user.service');

passport.use('local', require('../Middleware/localStrategy'));

passport.use(require('../Middleware/goolgeStrategy'));

router.get('/', passport.authenticate('jwt', { session: false }), UserController.getAllUserData);

router.get('/google', passport.authenticate('google', { session: false, scope: ['profile', 'email'] }));

router.get('/Auth', passport.authenticate('google', { session: false }), function (req, res) {
    res.status(200).end();
})

router.post('/login', passport.authenticate('local', { session: false }), require('../Controllers/user/login'));

router.post('/register', require('../Controllers/user/register'));

router.patch('/resources', passport.authenticate('jwt', { session: false }), UserController.ConsumeResource);

router.post('/coolDownGrid', passport.authenticate('jwt', { session: false }), UserController.CoolDownofColleting);

module.exports = router;
