const chai = require('chai');
const expect = chai.expect;
const io = require('socket.io-client');
const _ = require('lodash');

const client = io.connect('http://localhost:3000')
const client2 = io.connect('http://localhost:3000')

suite('Socekt', () => {
    test('login', done => {
        client.emit('login', 60836187)
        client2.emit('login', 10000000)
        done();
    })
    test('addFriend', done => {
        const InvitationInfo = {
            friend: { uid: 10000000, username: 'ImTEST' },
            user: { uid: 60836187, username: 'yo' }
        };
        client.emit('addFriend', InvitationInfo)
        client2.on('getAllFriendInvitations', msg => {
            console.log('       client2(uid:10000000) : Invitation From : ', msg)
            let eq = _.isEqual(msg , InvitationInfo.user);
            expect(eq).to.equal(true)
            done();
        })
    }).timeout(5000);

    test('acceptFriendInvitation', done => {
        const FriendInfo = {
            friend: { uid: 60836187, username: 'yo' },
            user: { uid: 10000000, username: 'ImTEST' }
        }
        client2.emit('acceptFriendInvitation', FriendInfo)
        client.on('getFriends', msg => {
            console.log('       This one accept invitation', msg)
            let eq = _.isEqual(msg , FriendInfo.user);
            expect(eq).to.be.equal(true)
            done();
        })
    }).timeout(5000);

    test("shutDown" , done =>{
        client.emit('shutDown' , {
            coin :  { amount : 87},
            value : {  power : 87}, 
            population : { max : 87},
        });

        done();
    })
})
