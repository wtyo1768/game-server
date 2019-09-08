const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/user/user.service');
const passport = require('passport');
const FriendController = require('../Controllers/user/user.FriendFeature');
const BaggageController = require('../Controllers/user/baggage')
router.use(passport.authenticate('jwt', { session: false }));

router.get('/', UserController.getAllUserData);

router.get('/planetList',UserController.getPlanetList);

router.patch('/isInBeginningStory' , UserController.leaveBeginningMode);

router.patch('/isBeginner',UserController.isBeginner);

router.patch('/currentBeginnerGuideScenes', UserController.nextScenes);

router.patch('/coin', UserController.spendCoin);

router.patch('/diamond', UserController.spendDiamond);

router.patch('/resources', UserController.ConsumeResource);

router.patch('/mainStory/complete', UserController.completeMainStory)

router.patch('/mainStory/watched', UserController.watchedMainStory)

router.post('/coolDownGrid', UserController.CoolDownofColleting);

router.get('/search/:uid', FriendController.findUserByUid);

router.get('/friends' , FriendController.getFriends);

router.get('/friendInvitations' , FriendController.friendInvitations);

router.post('/baggage/:type' ,  BaggageController.saveToBaggage ) ;



module.exports = router;
