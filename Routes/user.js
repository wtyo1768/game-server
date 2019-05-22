const express = require('express');
const router = express.Router();

router.post('/login', require('../Controllers/user/login'));

router.post('/register', require('../Controllers/user/register'));

module.exports = router;

