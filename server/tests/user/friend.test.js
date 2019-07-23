const chai = require('chai');
const expect = chai.expect;
const agent = require('../auth/login.test')
suite('#SearchFriend', () => {
   
    // who have Ability to friend
    test('find User By uid (200', done => {
         const data = require('./user.service');
    console.log(data)
        agent.get(`/user/search/${uid}`)
            .end((err, res) => {
                expect(res).to.have.status(200);
                let resdata = JSON.parse(res.text);
                expect(resdata.username).to.exist;
                expect(resdata.uid).to.exist;
                done();
            })
    })
    test('Cant find User (404', done => {
        agent.get(`/user/search/1`)
            .end((err, res) => {
                expect(res).to.have.status(404);
                done();
            })
    })
    // test('DontHaveAbility' , done=>{
    //     agent.get(`/user/search/${uid}`)
    //     .end((err, res) => {
    //         expect(res).to.have.status(405);
    //         done();
    //     })
    // })
})

suite('getFriends', () => {
    test('Should return Friends Array', done => {
        agent.get('/user/friends')
            .end((err, res) => {
                expect(res).to.have.status(200);
                let resdata = JSON.parse(res.text);
                console.log(resdata)
                expect(resdata).to.be.an('array');
                done();
            })
    })
})

suite('friendInvitations', () => {
    test('Should return FriendsInvitations Array', done => {
        agent.get('/user/friendInvitations')
            .end((err, res) => {
                expect(res).to.have.status(200);
                let resdata = JSON.parse(res.text);
                console.log(resdata)
                expect(resdata).to.be.an('array');
                done();
            })
    })
})