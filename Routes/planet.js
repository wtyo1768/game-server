const express = require('express');
const router = express.Router();
const passport = require('passport');

passport.use('jwt', require('../Middleware/jwtStrategy'));

router.use(passport.authenticate('jwt', { session: false }))

router.get('/rock', function (req, res) {
    delete req.user['_id'];
    res.send(req.user);
})

module.exports = router;