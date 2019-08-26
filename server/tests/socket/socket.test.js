const chai = require('chai');
const expect = chai.expect;
const io = require('socket.io-client');
const _ = require('lodash');

const client = io.connect('http://localhost:3000')
const client2 = io.connect('http://localhost:3000')
//
// const base = 'http://localhost:3000';
const agent = require('../auth/login.test')
// const agent2 = chai.request.agent(base)
let uid, uid2
//
suite('Socekt', () => {
    //
    // const form = {
    //     "email": "test2@123",
    //     "username": "azoo",
    //     "password": "123456"
    // }
    // test('should return 200 Success', done => {
    //     agent2.post('/user/login')
    //         .send(form)
    //         .end((err, res) => {
    //             expect(res).to.have.status(200);
    //             done()
    //         })
    // })
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
    //
    test('login', done => {
        // client.emit('login', 60836187)
        // client2.emit('login', 10000000)
        client.emit('login', uid)
        client2.emit('login', uid2)
        done();
    })
    test('addFriend', done => {
        const InvitationInfo = {
            // friend: { uid: 10000000, username: 'ImTEST' },
            // user: { uid: 60836187, username: 'yo' }
            friend: { uid: uid2, username: 'azoo' },
            user: { uid: uid, username: 'yo' }
        }; 
        client2.on('getAllFriendInvitations', msg => {
            console.log('       client2(uid:10000000) : Invitation From : ', msg)
            let eq = _.isEqual(msg , InvitationInfo.user);
            expect(eq).to.equal(true)
            done();
        })
        client.emit('addFriend', InvitationInfo)
       
    }).timeout(5000);

    test('acceptFriendInvitation', done => {
        const FriendInfo = {
            // friend: { uid: 60836187, username: 'yo' },
            // user: { uid: 10000000, username: 'ImTEST' }
            friend: { uid: uid, username: 'yo' },
            user: { uid: uid2, username: 'azoo' }
        }   
        client.on('getFriends', msg => {
            console.log('       This one accept invitation', msg)
            let eq = _.isEqual(msg , FriendInfo.user);
            expect(eq).to.be.equal(true)
            done();
        })
        client2.emit('acceptFriendInvitation', FriendInfo)
    
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
