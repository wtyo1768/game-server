const chai = require('chai');
const expect = chai.expect;

var io = require('socket.io-client');

client = io.connect('http://localhost:3000')
client2 = io.connect('http://localhost:3000')

suite('Socekt', () => {
    test('login', done => {
        client.emit('login', 60836187)
        client2.emit('login', 10000000)
        done();
    })
    test('addFriend', done => {
        client.emit('addFriend', {
            friend: { uid: 10000000, username: 'ImTEST' },
            user: { uid: 60836187, username: 'yo' }
        })
        client2.on('getAllFriendInvitations', msg => {
            console.log('       client2(uid:10000000) : Invitation From : ', msg)
            done();
        })
    }).timeout(4000);

    test('acceptFriendInvitation', done => {
        client2.emit('acceptFriendInvitation' , {
            friend: { uid: 60836187, username: 'yo' },
            user: { uid: 10000000, username: 'ImTEST' }
        })
        client.on('getFriends' , msg => {
            console.log('       This one accept invitation' , msg)
            expect(msg).to.be.exist
            done();
        })
    }).timeout(4000);
})
