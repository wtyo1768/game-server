const chai = require('chai');
const expect = chai.expect;
var request = require('request').defaults({ jar: true });
const Usermodel = require('../Model/UserModel')

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
suite('User', () => {
    const form = {
        "email": "test@yahoo.com.tw",
        "username": "yosa",
        "password": "123456"
    };
    setup(() => {
        Usermodel.deleteOne({ "email": form.email }, function (err) {
            if (err)
                console.info(err);
        });
    })
    suite('#Register', async() => {
        await test('should return 201 Created', done => {
            request.post({ url: base + '/user/register', headers }, (err, res, body) => {
                expect(res.statusCode).to.equal(201)
                console.debug(res.statusCode)
                done();
            }).form(form);
        })
        test('should return 406 duplicate account', done => {
            request.post({ url: base + '/user/register', headers }, (err, res, body) => {
                expect(res.statusCode).to.equal(406)
                console.debug(res.statusCode)
                done();
            }).form(form);
        })
    })
    suite('#login', () => {
        test('should return 401 404 200', done => {
            request.post(base + '/user/login', (err, res, body) => {
                expect(res.statusCode).to.be.oneOf([401, 404, 200])
                console.debug(res.statusCode)
                done();
            }).form(form);
        })
    })
});

