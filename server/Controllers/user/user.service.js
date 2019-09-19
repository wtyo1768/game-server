const UserModel = require('../../Model/UserModel');
const PlanetModel = require('../../Model/PlanetModel');

exports.getAllUserData = async function (req, res) {
    return res.send(req.user);
}
exports.getPlanetList = async function (req, res) {
    logger.info(req.user.planets.length)
    let result = [];
    req.user.planets.forEach((ele, index) => {
        PlanetModel.findById(ele.pid)
            .select('name type level positionX positionY experience')
            .then(doc => {
                result.push(doc)
                if (index == req.user.planets.length - 1)
                    return res.send(result)
            })
    })

}

exports.leaveBeginningMode = (req, res) => {
    UserModel.findById(req.user._id)
        .then(doc => {
            doc.isInBeginningStory = false;
            doc.save();
            res.end()
        })
        .catch(err => {
            logger.error(err);
            res.status(400).end();
        })
}

exports.isBeginner = (req, res) => {
    UserModel.findById(req.user._id)
        .then(doc => {
            doc.isBeginner = false;
            doc.save();
            res.end()
        })
        .catch(err => {
            logger.error(err);
            res.status(400).end();
        })
}

exports.nextScenes = (req, res) => {
    UserModel.findById(req.user._id)
        .then(doc => {
            doc.currentBeginnerGuideScenes = req.body.currentScenes
            doc.save();
            res.end()
        })
        .catch(err => {
            logger.error(err);
            res.status(400).end();
        })
}

exports.ConsumeResource = async function (req, res) {
    logger.info('consume')
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
            doc.save().then(() => res.status(200).end())
        })
        .catch(err => {
            logger.error(err);
            res.status(500).end()
        })
}

exports.spendCoin = function (req, res) {
    const money = req.body.coin;
    logger.info(money)
    UserModel.findByIdAndUpdate(req.user._id, { coin: money })
        .then(() => res.end())
        .catch(err => {
            logger.error(err);
            res.status(400).end()
        })
}
exports.spendDiamond = function (req, res) {
    const diamond = req.body.diamond;
    logger.info(`${diamond} : diamond`);
    UserModel.findByIdAndUpdate(req.user._id, { diamond: diamond })
        .then(() => res.end())
        .catch(err => {
            logger.error(err);
            res.status(400).end();
        });
}

exports.CoolDownofColleting = function (req, res) {
    const data = req.body.gridData
    let modified = false
    logger.info('Cooldown')
    logger.info(data)

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
        .catch(err => {
            logger.error(err);
            res.status(500).end()
        });
}
exports.accessHint = (req, res) => {
    UserModel.findById(req.user._id)
        .then(doc => {
            doc.mainStory.haveAccessedHint = true;
            doc.save().then( () => res.send(doc.mainStory.haveAccessedHint) )
        })
        .catch(err => {
            logger.error(err)
            res.status(500).end()
        })

}


exports.completeMainStory = function (req, res) {
    const data = req.body.currentChapter
    UserModel.findById(req.user._id)
        .then(doc => {
            doc.mainStory.currentChapter = data
            doc.mainStory.watchedStory = false
            doc.haveAccessedHint = false
            doc.save()
            res.end()
        })
        .catch(err => {
            logger.error(err);
            res.status(400).end()
        })
}

exports.watchedMainStory = function (req, res) {
    UserModel.findById(req.user._id)
        .then(doc => {
            doc.mainStory.watchedStory = true
            doc.save()
            res.end()
        })
        .catch(err => {
            logger.error(err);
            res.status(400).end()
        })
}
