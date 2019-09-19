const express = require('express');
const router = express.Router();
const passport = require('passport');
const PlanetController = require('../Controllers/planet/planet.service');

router.use(passport.authenticate('jwt', { session: false }))

router.post('/', PlanetController.newPlanet);

router.get('/:pid', PlanetController.getPlanetData);

router.patch('/:pid/level', PlanetController.levelUp)

router.patch('/:pid/scale', PlanetController.expandScale)

router.route('/:pid/building')
    .post(PlanetController.ConstructBuilding)

    .patch(PlanetController.ConstructionCompleted)

    .delete(PlanetController.DeconstructBuilding)

router.patch('/:pid/architectureTechnology', PlanetController.BuildingDevelop)

router.patch('/:pid/architectureTechnologyPoint', PlanetController.updateTechPoint)

router.patch('/:pid/experience', PlanetController.getExp);

router.post('/:pid/buffCards', PlanetController.DrawCard)

router.patch('/:pid/activeBuffCard', PlanetController.activeBuffCard)

router.patch('/:pid/buildingMap/move', PlanetController.moveBuilding)

module.exports = router;