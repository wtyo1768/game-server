const PlanetModel = require('../../Model/PlanetModel');

exports.getPlanetData = function (req, res) { 
    //You can't get Planet that didn't  belong to you
    req.user.planets.forEach(async (element) => {
        if (element.pid == req.params.pid) {
            var data_res = await PlanetModel.findById(req.params.pid);
            res.status(200);
            return res.send(data_res);
        }
    });
    res.status(401);

}

exports.update = async function (req, res) {
    console.log(req.user)
    // PlanetModel.findByIdAndUpdate(req.user._id, data);
    console.log(req.body)
    return res.send(req.user)
}

exports.ConstructBuilding = function (req, res) {
    PlanetModel.findById(req.body.pid)
        .then(planet => {
            planet.buildingMap.push(req.body.building)
            planet.markModified('buildingMap')
            planet.save().then((planet) => res.send(planet))
        }).catch((err) => {
            res.send(err);
        })
}

exports.DeconstructBuilding = async function (req, res) {
    PlanetModel.findById(req.body.pid)
        .then(planet => {
            planet.buildingMap.splice(req.body.index, 1)
            planet.markModified(`buildingMap`)
            planet.save().then((planet) => res.send(planet))
        }).catch((err) => {
            res.send(err);
        })
}

exports.haveBuiltBuilding = async function (req, res) {
    PlanetModel.findById(req.body.pid)
        .then(planet => {
            planet.buildingMap[req.body.index].status = 'done'
            planet.markModified(`buildingMap`)
            planet.save().then((planet) => res.send(planet))
        }).catch((err) => {
            res.send(err);
        })
}