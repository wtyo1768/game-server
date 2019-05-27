const express = require('express');
const router = express.Router();
const passport = require('passport');
const UserController = require('../Controllers/user/user.service');

passport.use('local', require('../Middleware/localStrategy'));

router.get('/', passport.authenticate('jwt', { session: false }), UserController.getAllUserData);

router.post('/login', passport.authenticate('local', { session: false }), require('../Controllers/user/login'));

router.post('/register', require('../Controllers/user/register'));

router.patch('/resources', passport.authenticate('jwt', { session: false }), UserController.ConsumeResource);

module.exports = router;
