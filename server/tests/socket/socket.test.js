const chai = require('chai');
const expect = chai.expect;
const io = require('socket.io-client');
const _ = require('lodash');

const client = io.connect('http://localhost:3000')
const client2 = io.connect('http://localhost:3000')
const agent = require('../auth/login.test')

let uid, uid2

suite('Socekt', () => {

    test('get uid', done => {
        agent[0].get('/user')
            .end((err, res) => {
                uid = res.body.uid
                console.log(uid)
            })
        agent[1].get('/user')
            .end((err, res) => {
                uid2 = res.body.uid
                console.log(uid2)
                done(err)
            })
    })
    test('login', done => {
        client.emit('login', uid)
        client2.emit('login', uid2)
        done();
    })
    test('addFriend', done => {
        const InvitationInfo = {
            friend: { uid: uid2, username: 'azoo' },
            user: { uid: uid, username: 'yo' }
        };
        client2.on('getAllFriendInvitations', msg => {
            console.log('       client2(uid:10000000) : Invitation From : ', msg)
            let eq = _.isEqual(msg, InvitationInfo.user);
            expect(eq).to.equal(true)
            done();
        })
        setTimeout(() => client.emit('addFriend', InvitationInfo), 1000);

    }).timeout(5000);

    test('acceptFriendInvitation', done => {
        const FriendInfo = {
            friend: { uid: uid, username: 'yo' },
            user: { uid: uid2, username: 'azoo' }
        }
        client.on('getFriends', msg => {
            console.log('       This one accept invitation', msg)
            let eq = _.isEqual(msg, FriendInfo.user);
            expect(eq).to.be.equal(true)
            done();
        })
        setTimeout(() => client2.emit('acceptFriendInvitation', FriendInfo), 1000);

    }).timeout(5000);

    test("shutDown", done => {
        client.emit('shutDown', {
            coin: { amount: 87 },
            value: { power: 87 },
            population: { max: 87 },
        });

        done();
    })
})
