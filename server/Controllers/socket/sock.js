const UsersID = {};
const UserModel = require('../../Model/UserModel');
const array = require('lodash/array')

io.on('connection', socket => {

    socket.on('login', msg => {
        UsersID[msg] = socket.id
    })

    socket.on('addFriend', msg => {
        UserModel.findOne({ uid: msg.friend.uid }).then(doc => {
            if(!doc)
                return console.log("uid doesn't exist");
            doc.friendInvitations.push(msg.user)
            doc.markModified('friendInvitations')
            doc.save();
        })
        //the user is online
        if (UsersID[msg.friend.uid])
            socket.to(UsersID[msg.friend.uid]).emit('getAllFriendInvitations', msg.user)
    })

    socket.on('acceptFriendInvitation', msg => {
        UserModel.findOne({ uid: msg.user.uid }).then(doc => {
            doc.friends.push(msg.friend)
            array.remove(doc.friendInvitations, n => n.uid == msg.friend.uid)
            doc.markModified('friends')
            doc.markModified('friendInvitations')
            doc.save();
        })
        UserModel.findOne({ uid: msg.friend.uid }).then(doc => {
            doc.friends.push(msg.user)
            doc.markModified('friends')
            doc.save();
        })
        //the user is online
        if (UsersID[msg.friend.uid])
            socket.to(UsersID[msg.friend.uid]).emit('getFriends', msg.user)
    })
    socket.on('disconnect' , ()=>{
        delete UsersID[socket.id];
    })
})
