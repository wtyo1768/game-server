const UserModel = require('../../Model/UserModel');
const PlanetModel = require('../../Model/PlanetModel');
const array = require('lodash/array');

exports.findUserByUid = async (req, res) => {
    const doc = await UserModel.findOne({ uid: req.params.uid });
    if (doc) {
        const Pdoc = await PlanetModel.findById(doc.planets[0].pid)
        const haveC3building = array.findIndex(Pdoc.buildingMap, ["id", "c3"]);
        const UserData = {
            uid: req.params.uid,
            username: doc.username
        };
        (haveC3building != -1) ? res.send(UserData) : res.status(405).end();
    }
    else {
        res.status(404).end();
    }
}

exports.getFriends = (req, res) => res.send(req.user.friends);

exports.friendInvitations = (req, res) => res.send(req.user.friendInvitations);
