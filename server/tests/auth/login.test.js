const chai = require('chai');
const expect = chai.expect;
const base = 'http://localhost:3000/api';
chai.use(require('chai-http'));
const agent = chai.request.agent(base)
const agent2 = chai.request.agent(base)
const form = [
    {
        "email": "test@123",
        "username": "yosa",
        "password": "123456"
    }, {
        "email": "test@123",
        "username": "hahaha",
        "password": "111111"
    }, {
        "email": "dosent_exist@gmail.com",
        "username": "!@#$%",
        "password": "111111"
    }, {
        "email": "test2@123",
        "username": "azoo",
        "password": "123456"
    }
]

suite('login', () => {
    test('should return 200 Success', done => {
        agent.post('/user/login')
            .send(form[0])
            .end((err, res) => {
                expect(res).to.have.status(200);
            })
        agent2.post('/user/login')
            .send(form[3])
            .end((err, res) => {
                expect(res).to.have.status(200);
                done()
            })
    })

    //帳號或密碼錯誤
    //     test('should return 401 Invaild password or account', done => {
    //         request.post(base + '/user/login', (err, res, body) => {
    //             expect(res.statusCode).to.equal(401)
    //             done();
    //         }).form(form[1]);
    //     })

    //     //帳號不存在
    //     test('should return 404 Not found', done => {
    //         request.post(base + '/user/login', (err, res, body) => {
    //             expect(res.statusCode).to.equal(404)
    //             console.log(res.statusCode)
    //             done();
    //         }).form(form[2]);
    //     })
})

module.exports = [agent, agent2]