const PlanetModel = require('../../Model/PlanetModel');

exports.getPlanetData = function (req, res) {
    //You can't get Planet that didn't  belong to you
    let isValid = req.user.planets.some(ele => ele.pid == req.params.pid);
    isValid ? PlanetModel.findById(req.params.pid).then(doc => res.send(doc))
        : res.status(401).end();
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
        })
        .catch(
            err => res.send(err))
}

exports.DeconstructBuilding = async function (req, res) {

    PlanetModel.findById(req.body.pid)
        .then(planet => {
            planet.buildingMap.splice(req.body.index, 1)
            planet.markModified(`buildingMap`)
            planet.save().then((planet) => res.send(planet))
        })
        .catch(err => res.send(err))
}

exports.haveBuiltBuilding = async function (req, res) {

    PlanetModel.findById(req.body.pid)
        .then(planet => {
            planet.buildingMap[req.body.index].status = 'done'
            planet.markModified(`buildingMap`)
            planet.save().then((planet) => res.send(planet))
        })
        .catch(err => res.send(err))
}