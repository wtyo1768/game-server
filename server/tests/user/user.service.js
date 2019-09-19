const chai = require('chai');
const expect = chai.expect;
const agent = require('../auth/login.test')

suite('User', () => {
    test('getUserdata', done => {
        agent[0].get('/user')
            .end((err, res) => {
                data = res.body;
                expect(res).have.status(200)
                done(err)
            })
    })

    test('complete main story', done => {
        agent[0].patch('/user/mainStory/complete')
            .send({currentChapter: '87-87'})
            .end((err, res) => {
                data = res.body
                expect(res).have.status(200)
                done(err)
            })
    })
    test('haveAccess' , done => {
        agent[0].patch('/user/mainStory/accessHint')
            .end((err,res)=>{
                expect(res.body).to.equal(true)
                done()
            })

    })
    test('watched story', done => {
        agent[0].patch('/user/mainStory/watched')
            .end((err, res) => {
                expect(res).have.status(200)
                done(err)
            })
    })

})

// module.exports = agent.get('/user').end((err, res) => {
//     return res.body
// });