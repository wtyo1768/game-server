const UserModel = require('../../Model/UserModel');

exports.getAllUserData = async function (req, res) {
    return res.send(req.user);
}

exports.ConsumeResource = async function (req, res) {
    console.log('consume')
    const data = req.body.resources;
    if (!data)
        return res.status(204).end();

    UserModel.findById(req.user._id)
        .select('resources')
        .exec()
        .then(doc => {
            data.forEach((ele, index) => {
                doc.resources[index] = ele;
            })
            doc.markModified('resources')
            doc.save()
                .then(() => res.status(200).end())
        })
        .catch(err => res.status(400).end())
}

exports.spentCoin = function (req, res) {
    const money = req.body.coin;

    UserModel.findByIdAndUpdate(req.user._id, { coin: money })
        .exec()
        .then(() => {
        })
        .catch(() => {
        })
}
exports.spendDiamong = function (req, res) {
}

exports.CoolDownofColleting = function (req, res) {
    const data = req.body.gridData
    let modified = false
    console.log('Cooldown')
    console.log(data)

    UserModel.findById(req.user._id)
        .select('coolDownGrid')
        .exec()
        .then(doc => {
            doc.coolDownGrid.forEach((ele, index) => {
                if (ele.maxLat == data.maxLat && ele.maxLng == data.maxLng) {
                    doc.coolDownGrid[index].finishTime = data.finishTime;
                    modified = true;
                }
            })
            if (!modified)
                doc.coolDownGrid.push({
                    maxLat: data.maxLat,
                    maxLng: data.maxLng,
                    finishTime: data.finishTime
                })
            doc.markModified(`coolDownGrid`);
            doc.save();
            return res.status(200).end();
        })
        .catch(err => res.status(400).end());
}
