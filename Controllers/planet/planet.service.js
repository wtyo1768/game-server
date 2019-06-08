const PlanetModel = require('../../Model/PlanetModel');
const UserModel = require('../../Model/UserModel');

exports.newPlanet = (req, res) => {
    console.log(req.body);
    try {
        const Planet = new PlanetModel(req.body);
        Planet.save()
        UserModel.findById(req.user._id)
        .then(doc=>{
            doc.planets.push({ pid: Planet._id, state: true });
            doc.markModified('planets');
            doc.save();
            res.status(201).send(Planet);
        })
    } catch (error) {
        res.status(400).end()
    }

}

exports.getPlanetData = function (req, res) {
    //You can't get Planet that didn't  belong to you
    let isValid = req.user.planets.some(ele => ele.pid == req.params.pid);
    isValid ? PlanetModel.findById(req.params.pid).then(doc => res.send(doc))
        : res.status(401).end();
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

exports.BuildingDevelop = function (req, res) {
    const data = req.body;

    let isValid = req.user.planets.some(ele => ele.pid == data.pid);
    return isValid ? PlanetModel.findById(req.body.pid)
        .then(doc => {
            doc.architectureTechnology[data.type][data.id] = true;
            doc.markModified('architectureTechnology');
            doc.save().then(() => res.end())
        })
        .catch(() => res.status(400).end())
        : res.status(204).end();
}