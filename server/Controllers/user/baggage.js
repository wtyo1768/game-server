const UserModel = require('../../Model/UserModel');
const PlanetModel = require('../../Model/PlanetModel');

exports.saveToBaggage = (req,res) => {

    console.log(req.params.type , req.body.item);
    res.end();
    
}