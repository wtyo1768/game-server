const express = require('express');
const router = express.Router();
const passport = require('passport');

passport.use('local', require('../Middleware/localStrategy'));

router.post('/login', passport.authenticate('local', { session: false }), require('../Controllers/user/login'));

router.post('/register', require('../Controllers/user/register'));

module.exports = router;

