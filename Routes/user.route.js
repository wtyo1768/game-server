const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/user/user.service');
const passport = require('passport');

router.use(passport.authenticate('jwt', { session: false }));

router.get('/', UserController.getAllUserData);

router.patch('/resources', UserController.ConsumeResource);

router.post('/coolDownGrid', UserController.CoolDownofColleting);

module.exports = router;
