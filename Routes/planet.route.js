const express = require('express');
const router = express.Router();
const passport = require('passport');
const PlanetController = require('../Controllers/planet/planet.service');

router.use(passport.authenticate('jwt', { session: false }))

router.get('/:pid', PlanetController.getPlanetData);

router.post('/building', PlanetController.ConstructBuilding);

router.patch('/building', PlanetController.haveBuiltBuilding);

router.delete('/building', PlanetController.DeconstructBuilding);

module.exports = router;