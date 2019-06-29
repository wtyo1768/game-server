const router = require("express").Router();
const MapController = require('../Controllers/map.sevice');

router.route('')
    .get(MapController.getMapResource)

    .post(MapController.collectMapResource)
    
    .patch(MapController.ResourceDepletion)

module.exports = router;