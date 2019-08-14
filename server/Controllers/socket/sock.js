const UsersID = {};
const UserModel = require('../../Model/UserModel');
const PlanetModel = require('../../Model/PlanetModel');
const array = require('lodash/array')
const _ = require('lodash');

io.on('connection', socket => {

    socket.on('login', msg => {
        UsersID[msg] = socket.id
    })

    socket.on('addFriend', msg => {
        UserModel.findOne({ uid: msg.friend.uid }).then(doc => {
            if (!doc)
                throw ("uid doesn't exist");
            doc.friendInvitations.push(msg.user)
            doc.markModified('friendInvitations')
            doc.save().then(() => {
                //the user is online
                if (UsersID[msg.friend.uid])
                    socket.to(UsersID[msg.friend.uid]).emit('getAllFriendInvitations', msg.user)

            }).catch(err => {
                logger.error(err)
                if (UsersID[msg.friend.uid])
                    socket.to(UsersID[msg.friend.uid]).emit('serverError', 'Server Error')
            })
        }).catch(err => {
            logger.error(err)
            if (UsersID[msg.friend.uid])
                socket.to(UsersID[msg.friend.uid]).emit('serverError', 'Server Error')
        })
    })

    socket.on('acceptFriendInvitation', async msg => {
        Promise.all([UserModel.findOne({ uid: msg.user.uid }), UserModel.findOne({ uid: msg.friend.uid })])
            .then(doc => {
                doc[0].friends.push(msg.friend);
                array.remove(doc[0].friendInvitations, ele => ele.uid == msg.friend.uid);
                doc[0].markModified('friends');
                doc[0].markModified('friendInvitations');
                doc[1].friends.push(msg.user);
                doc[1].markModified('friends');
                Promise.all([doc[0].save(), doc[1].save()]).then(() => {
                    if (UsersID[msg.friend.uid])
                        socket.to(UsersID[msg.friend.uid]).emit('getFriends', msg.user);
                }).catch(err => {
                    logger.error(err);
                    if (UsersID[msg.friend.uid]) {
                        socket.to(UsersID[msg.friend.uid]).emit('serverError', 'Server Error');
                    }
                })
            }).catch(err => {
                logger.error(err);
                if (UsersID[msg.friend.uid])
                    socket.to(UsersID[msg.friend.uid]).emit('serverError', 'Server Error')
            });
    })

    socket.on('shutDown', async msg => {
        try {
            const uid = _.findKey(UsersID, ele => ele == socket.id);
            const doc = await UserModel.findOne({ uid: uid })
            doc.lastLogoutTime = Date.now();
            doc.coin = msg.coin;
            doc.markModified('coin')
            doc.save();
            const Pdoc = await PlanetModel.findById(doc.planets[0].pid)
            Pdoc.value = msg.value;
            Pdoc.population = msg.population;
            Pdoc.save();
            delete UsersID[uid];
        } catch (err) {
            console.log('..')
            logger.error(err)
        }

    })
})
