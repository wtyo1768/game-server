const UserModel = require('../../Model/UserModel');
const _ = require('lodash');
// const PlanetModel = require('../../Model/PlanetModel');

exports.saveToBaggage = (req, res) => {
    const type = req.params.type;
    // console.log(req.body)
    UserModel.findOne(req.user._id)
        .then(doc => {
            if (!doc.baggage[type])
                return res.status(400).end();
            req.body.forEach(element => {
                let itemIndex = _.findIndex(doc.baggage[type], n => n.id == element.id);
                if ( itemIndex != -1 ) {
                    console.log( doc.baggage[type][itemIndex] );
                    doc.baggage[type][itemIndex].amount += element.amount;
                }
                else
                    doc.baggage[type].push(element);
            });
            doc.markModified('baggage')
            doc.save(() => res.status(201).end())
        })
        .catch(error => {
            logger.error(error);
            res.status(400).end();
        });
}

exports.useBaggageItem = (req, res) => {
    const type = req.params.type;
    // console.log(req.query)
    res.status(202).end()
    UserModel.findOne(req.user._id)
        .then(doc => {
            itemIndex = _.findIndex(doc.baggage[type] , element => element.id == req.query.id)
            if(doc.baggage[type][itemIndex].amount < req.query.amount )
                res.status(400).end()
            else if(doc.baggage[type][itemIndex].amount == req.query.amount)
                _.remove(doc.baggage[type], element => element._id == req.params.itemId)
            else 
                doc.baggage[type][itemIndex].amount -= req.query.amount;

            doc.markModified(`baggage`);
            doc.save().then(() => res.status(202).end())
        })
}