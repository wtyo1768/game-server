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
    PlanetModel.findById(req.body.pid, async (err, doc) => {
        doc.BuildingMap.push(req.body.building)
        await doc.save();
        return res.send(doc);
    }).then(() => {
    }).catch((err) => {
        return res.send(err);
    })
}

exports.DeconstructBuilding = async function (req, res) {


}

exports.MoveBuilding = async function (req, res) {


}