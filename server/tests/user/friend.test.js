const chai = require('chai');
const expect = chai.expect;
const agent = require('../auth/login.test')
suite('#SearchFriend', () => {
//    let uid = 60836187;
    // who have Ability to friend

    let UserData
    test('first', done => {
        agent[0].get('/user')
            .end((err, res) => {
                UserData = res.body
                done()
            })
    }).timeout(4000)

    test('find User By uid (200', done => {
        expect(UserData.uid).to.exist
        agent[0].get(`/user/search/${UserData.uid}`)
            .end((err, res) => {
                done()
            })
    }).timeout(10000)

    // test('find User By uid (200', async () => {
    //     let UserData = await agent[0].get('/user')
    //     console.log('hey', UserData.body.uid)
    //     agent[0].get(`/user/search/${UserData.body.uid}`)
    //         .end(async (err, res) => {
    //             console.log(res.status)
    //         })
    // })

    // test('find User By uid (200', done => {
    //     agent[0].get('/user')
    //         .then(res => Promise.resolve(res.body))
    //         .then(value => {
    //             console.log(value.uid)
    //             agent[0].get(`/user/search/${value.uid}`)
    //                 .then(res => {
    //                     console.log(res.status)
    //                     done();
    //                 })
    //         })
    // }).timeout(10000)

    // test('Cant find User (404', done => {
    //     agent[0].get(`/user/search/1`)
    //         .end((err, res) => {
    //             expect(res).to.have.status(404);
    //             done();
    //         })
    // })
    // test('DontHaveAbility' , done=>{
    //     agent[0].get(`/user/search/${uid}`)
    //     .end((err, res) => {
    //         expect(res).to.have.status(405);
    //         done();
    //     })
    // })
})

suite('getFriends', () => {
    test('Should return Friends Array', done => {
        agent[0].get('/user/friends')
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
        agent[0].get('/user/friendInvitations')
            .end((err, res) => {
                expect(res).to.have.status(200);
                let resdata = JSON.parse(res.text);
                console.log(resdata)
                expect(resdata).to.be.an('array');
                done();
            })
    })
})