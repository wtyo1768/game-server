const expect = require('chai').expect
const agent = require('../auth/login.test');

suite('Planet', () => {
    let pid = '5d35d6bc0074c53a2cf16b82'
    // test('New Planet', done =>{
    //     agent.post('/planet')
    //         .send({
    //             name : "test",
    //             type : "testyo",
    //         })
    //         .end((err,res) => {
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

    // test('ConstructBuilding', done => {
    //     agent.post(`/planet/${pid}/building`)
    //         .send({
    //             building: {
    //                 id: "c3"
    //             }
    //         })
    //         .end((err, res) => {
    //             // console.log(res)
    //             expect(res).have.status(200)
    //             done(err)
    //         })
    // })

    // test('delete Building', done => {
    //     agent.delete(`/planet/${pid}/building`)
    //         .send({
    //             population: {
    //                 max: 2122,
    //                 amount: 1,
    //                 growth: 1
    //             },
    //             value: {
    //                 power: 2,
    //                 food: 1,
    //                 entertainment: 2
    //             }
    //         })
    //         .end((err, res) => {
    //             expect(res).have.status(200)
    //             done(err)
    //         })
    // })

    test('patch Building', done => {
        agent.patch(`/planet/${pid}/building`)
            .send({
                index : 0 ,
                population: {
                    max: 2400000,
                    amount: 2342,
                    growth: 252
                },
                value : {
                    power: 22,
                    food: 22,
                    entertainment: 221
                }
            })
            .end((err, res) => {
                expect(res).have.status(200)
                done(err)
            })
    })
})