const PlanetModel = require('../../Model/PlanetModel');
const UserModel = require('../../Model/UserModel');
const _ = require('lodash')

exports.newPlanet = (req, res) => {
    const PlanetData = { ...req.body, owner: req.user.email };
    const Planet = new PlanetModel(PlanetData);
    Planet.save();
    UserModel.findById(req.user._id)
        .then(doc => {
            doc.planets.push({ pid: Planet._id, state: true });
            doc.markModified('planets');
            doc.save().then(() => res.status(201).send(Planet))
        })
        .catch(err => {
            logger.error(err);
            res.status(400).end();
        })
}

exports.getPlanetData = function (req, res) {
    //You can't get Planet that didn't  belong to you
    let isValid = req.user.planets.some(ele => ele.pid == req.params.pid);
    isValid ? PlanetModel.findById(req.params.pid).then(doc => res.send(doc))
        : res.status(401).end();
}

exports.levelUp = function (req, res) {
    PlanetModel.findById(req.params.pid)
        .then(doc => {
            doc.level += 1
            doc.save()
            res.end()
        })
        .catch(() => res.status(500).end())
}

exports.expandScale = function (req, res) {
    PlanetModel.findById(req.params.pid)
        .then(doc => {
            doc.scale += 1
            doc.save()
            res.end()
        })
        .catch(() => res.status(500).end())
}

exports.ConstructBuilding = function (req, res) {
    PlanetModel.findById(req.params.pid)
        .then(planet => {
            planet.buildingMap.push(req.body.building)
            planet.markModified('buildingMap')
            planet.save().then((planet) => res.send(planet))
        })
        .catch(
            err => res.send(err))
}

exports.DeconstructBuilding = async function (req, res) {
    PlanetModel.findById(req.params.pid)
        .then(async planet => {
            planet.buildingMap.splice(req.body.index, 1)
            planet.markModified(`buildingMap`)
            planet.population = req.body.population
            planet.value = req.body.value
            planet.markModified(`value`)
            let doc = await UserModel.findById(req.user._id);
            doc.resourceMax = req.body.resourceMax;
            doc.resources = req.body.resources;
            doc.save();
            planet.save().then((planet) => res.send(planet))
        })
        .catch(err => res.send(err))
}

exports.ConstructionCompleted = async function (req, res) {
    PlanetModel.findById(req.params.pid)
        .then(async planet => {
            planet.buildingMap[req.body.index].status = 'done'
            planet.markModified(`buildingMap`)
            planet.population = req.body.population
            planet.value = req.body.value
            planet.markModified(`value`)
            let doc = await UserModel.findById(req.user._id);
            doc.resourceMax = req.body.resourceMax;
            doc.resources = req.body.resources;
            doc.save();
            planet.save().then((planet) => res.send(planet))
        })
        .catch(err => res.send(err))
}

exports.BuildingDevelop = function (req, res) {
    const data = req.body;
    logger.info('BuildingDevelop')

    let isValid = req.user.planets.some(ele => ele.pid == req.params.pid);
    return isValid ? PlanetModel.findById(req.params.pid)
        .then(doc => {
            doc.architectureTechnology[req.body.type][req.body.id] = true;
            doc.markModified('architectureTechnology');
            doc.save().then(() => res.end())
        })
        .catch((err) => logger.info(err))
        : res.status(500).end();
}

exports.updateTechPoint = function (req, res) {
    logger.info('here', req.body)
    PlanetModel.findByIdAndUpdate({ _id: req.params.pid }, { architectureTechnologyPoint: req.body.point })
        .then(() => res.end())
        .catch(() => res.status(400).end());
}

exports.getExp = async (req, res) => {
    const ErrNotOccur = await PlanetModel.findOneAndUpdate({ _id: req.params.pid }, { experience: req.body.experience })
        .catch(() => res.status(500).end());
    if (ErrNotOccur)
        res.end();
}

exports.DrawCard = (req, res) => {
    logger.info('cards')
    PlanetModel.findById(req.params.pid)
        .then(doc => {
            doc.buffCards.push(req.body.buffCard);
            doc.markModified('buffCards');
            doc.save()
            res.end()
        })
        .catch(() => res.status(500).end())
}

exports.activeBuffCard = (req, res) => {
    PlanetModel.findById(req.params.pid)
        .then(doc => {
            doc.activeBuffCard.pop();
            if (req.body.buffCard)
                doc.activeBuffCard.push(req.body.buffCard);
            doc.markModified('activeBuffCard');
            doc.save();
            res.end()
        })
        .catch(() => res.status(500).end())
}

exports.moveBuilding = (req, res) => {
    console.log(req.body)
    PlanetModel.findById(req.params.pid)
        .then(doc => {
            buildingIndex = _.findIndex(doc.buildingMap, 
                element => element.coordinateX == req.body.building.coordinateX && 
                           element.coordinateY == req.body.building.coordinateY )
            if (buildingIndex != -1) {
                doc.buildingMap[buildingIndex].coordinateY = req.body.coordinateY;
                doc.buildingMap[buildingIndex].coordinateX = req.body.coordinateX;
                doc.markModified(`buildingMap`)
                doc.save(() => res.status(200).end())
            }
            else 
                res.status(500).end()
        })
        .catch(err => {
            logger.error(err)
            res.status(500).end()
        })
    res.send(true)
}