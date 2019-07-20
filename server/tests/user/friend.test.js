const chai = require('chai');
const expect = chai.expect;
const agent = require('./login.test')

suite('#SearchFriend', () => {
    // who have Ability to friend
    let uid = 44796482;
    test('find User By uid (200', done => {
        agent.get(`/user/search/${uid}`)
            .end((err, res) => {
                expect(res).to.have.status(200);
                console.log(res.text)
                expect(res.text).to.exist;
                done();
            })
    })
    test('Cant find User (404' , done =>{
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