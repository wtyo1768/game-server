const passport = require('passport');
const express = require('express');
const router = express.Router();

passport.use('jwt', require('../Middleware/jwtStrategy'));
passport.use('local', require('../Middleware/localStrategy'));
passport.use('google', require('../Middleware/goolgeStrategy'));
passport.use('facebook', require('../Middleware/facebookStrategy'));

router.post('/register', require('../Controllers/user/register'));

router.post('/login', passport.authenticate('local', { session: false }), require('../Controllers/user/login'));

router.get('/google', passport.authenticate('google', { session: false, scope: ['profile', 'email'] }));

router.get('/Auth', passport.authenticate('google', { session: false }), require('../Controllers/user/login'))

router.get('/facebook', passport.authenticate('facebook', { session: false, scope: ['email'] }));

router.get('/facebook/cb', passport.authenticate('facebook', { session: false }), require('../Controllers/user/login'));

module.exports = router;