const UsersID = {};
const UserModel = require('../../Model/UserModel');
const array = require('lodash/array')

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
                    socket.to(UsersID[msg.friend.uid]).emit('getAllFriendInvitations', err)
            })
        }).catch(err => {
            logger.error(err)
            if (UsersID[msg.friend.uid])
                socket.to(UsersID[msg.friend.uid]).emit('getAllFriendInvitations', 'Server Error')
        })
    })

    socket.on('acceptFriendInvitation', msg => {
        Promise.all([UserModel.findOne({ uid: msg.user.uid }), UserModel.findOne({ uid: msg.friend.uid })]).then(doc => {
            doc[0].friends.push(msg.friend)
            array.remove(doc[0].friendInvitations, n => n.uid == msg.friend.uid)
            doc[0].markModified('friends')
            doc[0].markModified('friendInvitations')
            doc[1].friends.push(msg.user)
            doc[1].markModified('friends')
            Promise.all([doc[0].save(), doc[1].save()]).then(() => {
                if (UsersID[msg.friend.uid])
                    socket.to(UsersID[msg.friend.uid]).emit('getFriends', msg.user)
            }).catch(err => {
                logger.error(err)
                if (UsersID[msg.friend.uid]) {
                    socket.to(UsersID[msg.friend.uid]).emit('getFriends', 'Server Error')
                }
            })
        }).catch(err => {
            logger.error(err)
            if (UsersID[msg.friend.uid]) {
                socket.to(UsersID[msg.friend.uid]).emit('getFriends', 'Server Error')
            }
        })
    })
    socket.on('disconnect', () => {
        delete UsersID[socket.id];
    })
})
