const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/user/user.service');
const passport = require('passport');
const FriendController = require('../Controllers/user/user.FriendFeature');

router.use(passport.authenticate('jwt', { session: false }));

router.get('/', UserController.getAllUserData);

router.get('/planetList',UserController.getPlanetList);

router.patch('/isInBeginningStory' , UserController.leaveBeginningMode);

router.patch('/isBeginner',UserController.isBeginner);

router.patch('/currentBeginnerGuideScenes', UserController.nextScenes);

router.patch('/coin', UserController.spendCoin);

router.patch('/diamond', UserController.spendDiamond);

router.patch('/resources', UserController.ConsumeResource);

router.post('/coolDownGrid', UserController.CoolDownofColleting);

router.get('/search/:uid', FriendController.findUserByUid);

router.get('/friends' , FriendController.getFriends);

router.get('/friendInvitations' , FriendController.friendInvitations);

module.exports = router;
