const chai = require('chai');
const expect = chai.expect;
const request = require('request').defaults({ jar: true });
const base = 'http://localhost:3000/api';
const headers = { 'Content-Type': 'text/plain' };

suite('Register', () => {
    const form = {
        "email": "test@123",
        "username": "yo",
        "password": "123456"
    };

    const form2 = {
        "email": "test2@123",
        "username": "azoo",
        "password": "123456"
    }

    test('should return 201 created', done => {
        request.post({ url: base + '/user/register', headers }).form(form2)
        request.post({ url: base + '/user/register', headers }, (err, res, body) => {
            expect(res.statusCode).to.equal(201)
            done();
        }).form(form);
    }).timeout(5000)

    test('should return 406 duplicate account', done => {
        request.post({ url: base + '/user/register', headers }, (err, res, body) => {
            expect(res.statusCode).to.equal(406);
            done();
        }).form(form);
    }).timeout(5000)

})

