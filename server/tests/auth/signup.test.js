const chai = require('chai');
const expect = chai.expect;
const request = require('request').defaults({ jar: true });
const base = 'http://localhost:3000';
const headers = { 'Content-Type': 'text/plain' };
const mongoose = require('mongoose');
const url = `mongodb+srv://wtyo1768:s124930654@kyronus-dihrd.mongodb.net/yo?retryWrites=trueb`;

mongoose.Promise = global.Promise;
mongoose.connection.on('error', error => console.warn('Error : ', error));

suite('Test Init', () => {
    test('should return 200', done => {
        request.get(base, (err, res, body) => {
            return new Promise((res, rej) => {
                !mongoose.connection.db ?
                    res(mongoose.connect(url, { useNewUrlParser: true, })) : res();
            }).then(val => {
                expect(res.statusCode).to.equal(200);
                if (mongoose.connection.db.collection('User'))
                    mongoose.connection.db.collection('User').drop(done);
            })
        })
    })
})
suite('Register', () => {
    const form = {
        "email": "test@123",
        "username": "yo",
        "password": "123456"
    };
    test('should return 201 created', done => {
        request.post({ url: base + '/user/register', headers }, (err, res, body) => {
            expect(res.statusCode).to.equal(201)
            done();
        }).form(form);
    })
    test('should return 406 duplicate account', done => {
        request.post({ url: base + '/user/register', headers }, (err, res, body) => {
            expect(res.statusCode).to.equal(406)
            done();
        }).form(form);
    })
})

