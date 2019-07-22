const expect = require('chai').expect
const agent = require('../user/login.test');
const pid = '5d35d6bc0074c53a2cf16b82'
suite('Planet', () => {
    // test('New Planet', done =>{
    //     agent.post('/planet')
    //         .send({
    //             name : "test",
    //             type : "testyo",
    //         })
    //         .end((err,res)=>{
    //             expect(res).have.status(201);
    //             done(err);
    //         })
    // })
    // test('Planet info', done => {
    //     agent.get(`/planet/${pid}`)
    //         .end((err, res) => {
    //             console.log(res.body)
    //             expect(res).have.status(200)
    //             done(err)
    //         })
    // })
    test('Building', done => {
        agent.post(`/planet/${pid}/building`)
            .end((err, res) => {
                // console.log(res)
                expect(res).have.status(200)
                done(err)
            })
    })
    test('delete Building', done => {
        agent.delete(`/planet/${pid}/building`)
            .send({
                population: {
                    max: 1,
                    amount: 1,
                    growth: 1
                },
                value: {
                    power: 1,
                    food: 1,
                    entertainment: 1
                }
            })
            .end((err, res) => {
                console.log(res.body)
                expect(res).have.status(200)
                done(err)
            })
    })
    test('patch Building', done => {
        agent.patch(`/planet/${pid}/building`)
            .send({
                population: {
                    max: 2,
                    amount: 2,
                    growth: 2
                },
                value: {
                    power: 2,
                    food: 2,
                    entertainment: 2
                }
            })
            .end((err, res) => {
                console.log(res.body)
                expect(res).have.status(200)
                done(err)
            })
    })
    // test('User info', done => {
    //   agent.get('/user')
    //       .end((err, res) => {
    //           // console.log(res.body)
    //           expect(res).have.status(200)
    //           done(err)
    //       })
    // })
})