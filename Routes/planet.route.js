const express = require('express');
const router = express.Router();
const passport = require('passport');
const PlanetController = require('../Controllers/planet/planet.service');

router.use(passport.authenticate('jwt', { session: false }))

router.post('/' , PlanetController.newPlanet);

router.get('/:pid', PlanetController.getPlanetData);

router.route('/building')
    .post(PlanetController.ConstructBuilding)

    .patch(PlanetController.haveBuiltBuilding)
    
    .delete(PlanetController.DeconstructBuilding)

router.patch('/architectureTechnology',PlanetController.BuildingDevelop)


module.exports = router;