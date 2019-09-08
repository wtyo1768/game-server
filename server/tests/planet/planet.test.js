const expect = require('chai').expect
const agent = require('../auth/login.test');

suite('Planet', () => {
    let UserData, pid

    test('New Planet', done => {
        agent[0].post('/planet')
            .send({
                name : "test",
                type : "testyo",
            })
            .end((err,res) => {
                expect(res).have.status(201);
                done(err);
            })
    })
    
    test('Get pid', done => {
        agent[0].get('/user')
            .end((err, res) => {
                UserData = res.body
                pid = UserData.planets[0].pid
                done()
            })
    })

    test('Planet info', done => {
        // console.log(UserData.planets[0].pid)
        agent[0].get(`/planet/${pid}`)
            .end((err, res) => {
                expect(res).have.status(200)
                done(err)
            })
    })

    test('ConstructBuilding', done => {
        agent[0].post(`/planet/${pid}/building`)
            .send({
                building: {
                    id: "c3"
                }
            })
            .end((err, res) => {
                expect(res).have.status(200)
                done(err)
            })
    })

    test('delete Building', done => {
        agent[0].delete(`/planet/${pid}/building`)
            .send({
                population: {
                    max: 2122,
                    amount: 1,
                    growth: 1
                },
                value: {
                    power: 2,
                    food: 1,
                    entertainment: 2
                }
            })
            .end((err, res) => {
                expect(res).have.status(200)
                done(err)
            })
    })

    test('patch Building', done => {
        agent[0].patch(`/planet/${pid}/building`)
            .send({
                index: 0,
                resourceMax: 870,
                resources: [{ type: "FUCK" }],

                population: {
                    max: 2400000,
                    amount: 2342,
                    growth: 252
                },
                value: {
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