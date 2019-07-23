const chai = require('chai');
const expect = chai.expect;
const request = require('request').defaults({ jar: true });
const base = 'http://localhost:3000';
const headers = { 'Content-Type': 'text/plain' };

suite('Server Init', () => {
    test('should return 200', done => {
        request.get(base, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            done();
        })
    })
})
const form = {
    "email": "test@123",
    "username": "yo",
    "password": "123456"
};
suite('Register', () => {
    test('should return 406 duplicate account', done => {
        request.post({ url: base + '/user/register', headers }, (err, res, body) => {
            expect(res.statusCode).to.equal(406)
            done();
        }).form(form);
    })
    // test('should return 201 created', done => {
    //     let form = {
    //         "email": "wtyo17689@gmail.com",
    //         "username": "yosa",
    //         "password": "123456"
    //     }
    //     request.post({ url: base + '/user/register', headers }, (err, res, body) => {
    //         expect(res.statusCode).to.equal(201)
    //         done();
    //     }).form(form);
    // })
})

