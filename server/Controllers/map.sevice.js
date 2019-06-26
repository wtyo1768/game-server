const MapModel = require('../Model/MapModel');

exports.getMapResource = function (req, res) {
    MapModel.find()
        .then(doc => res.send(doc))
        .catch(err => res.status(500).send(err))
}

exports.collectMapResource = async function (req, res) {

    const position = `${req.body.gridData.properties.maxLat},${req.body.gridData.properties.maxLng}`
    const query = { position: position }

    var doc = await MapModel.findOne(query);
    if (doc) {
        if (doc.expireAt && doc.expireAt < Date.now()) {
            console.log('remove by hand')
            doc.remove().then(() => {
                const Map = new MapModel(req.body.gridData);
                Map.save()
                .catch( ()=>res.status(400))
            });
        }
        else {
            doc.properties = req.body.gridData.properties
            doc.markModified('properites');
            doc.save()                
            .catch( ()=>res.status(500))
        }
    }
    else {
        console.log('New source')
        const Map = new MapModel(req.body.gridData);
        Map.save()
        .catch( ()=>res.status(500))
    }
    return res.end()
}

exports.ResourceDepletion = function (req, res) {
    console.log('Depletion');
    const position = `${req.body.gridData.properties.maxLat},${req.body.gridData.properties.maxLng}`
    const query = { position: position }

    MapModel.findOne(query)
        .then(doc => {
            doc.properties.respawnTime = Date.now() + 60 * 5;
            doc.expireAt = Date.now() + 60 * 5;
            doc.markModified(`properties`);
            doc.save();
            res.status(200).end();
        })
        .catch(err => console.log(err))
}

