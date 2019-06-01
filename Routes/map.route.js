const router = require("express").Router();
const MapController = require('../Controllers/map.sevice');


router.get('', MapController.getMapResource);

router.post('', MapController.collectMapResource);

router.patch('', MapController.ResourceDepletion);

module.exports = router;