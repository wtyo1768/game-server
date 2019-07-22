const chai = require('chai');
const expect = chai.expect;
const base = 'http://localhost:3000';
chai.use(require('chai-http'));
const agent = chai.request.agent(base)
const form = {
    "email": "test@123",
    "username": "yo",
    "password": "123456"
};
suite('login', () => {
    test('should return 200', done => {
        agent.post('/user/login')
            .send(form)
            .end((err, res) => {
                expect(res).to.have.status(200);
                done()
            })
    })
})

module.exports = agent;