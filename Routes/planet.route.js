const express = require('express');
const router = express.Router();
const passport = require('passport');
const PlanetController = require('../Controllers/planet/planet.service');

passport.use('jwt', require('../Middleware/jwtStrategy'));

router.use(passport.authenticate('jwt', { session: false }))
router.use(function (req, res, next) {
	if (req.method == "GET") 
			return next();
	req.body = JSON.parse(req.body);
	next();
})

router.get('/:pid', PlanetController.getPlanetData);

router.post('/building', PlanetController.ConstructBuilding);

router.patch('/building', PlanetController.haveBuiltBuilding);

router.delete('/building', PlanetController.DeconstructBuilding);


module.exports = router;