const UserModel = require('../../Model/UserModel');
const _ = require('lodash');
// const PlanetModel = require('../../Model/PlanetModel');

exports.saveToBaggage = (req, res) => {
    const type = req.params.type;
    UserModel.findOne(req.user._id)
        .then(doc => {
            if (!doc.baggage[type])
                return res.status(400).end();
            doc.baggage[type].push(req.body.item);
            doc.markModified('baggage');
            doc.save().then(() => res.status(201).end());
        })
        .catch(error => {
            logger.error(error);
            res.status(400).end();
        });
}

exports.useBaggageItem = (req, res) => {
    const type = req.params.type;
    UserModel.findOne(req.user._id)
        .then(doc => {
            _.remove(doc.baggage[type], element => element._id == req.params.itemId)
            doc.markModified(`baggage`);
            doc.save().then(() => res.status(202).end())
        })
}