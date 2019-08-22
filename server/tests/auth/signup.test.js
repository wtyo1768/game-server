const chai = require('chai');
const expect = chai.expect;
const request = require('request').defaults({ jar: true });
const base = 'http://localhost:3000';
const headers = { 'Content-Type': 'text/plain' };
const mongoose = require('mongoose');
const url = `mongodb+srv://wtyo1768:s124930654@kyronus-dihrd.mongodb.net/yo?retryWrites=trueb`;

mongoose.Promise = global.Promise;
mongoose.connection.on('error', error => console.warn('Error : ', error));

suite('Init' , () => { 
    test('Waiting for Server Start' , done => {
        setTimeout(done,2000);
    }).timeout(3000);
})

suite('Test Init', () => {
    test('DB init', done => {
        new Promise((res, rej) => {
            !mongoose.connection.db ?
                res(mongoose.connect(url, { useNewUrlParser: true, })) : res();
        }).then(val => {
                mongoose.connection.db.collection('Planet').remove({"owner":{$nin:["ky@ky"]}})
                mongoose.connection.db.collection('User').remove({"email":{$nin:["ky@ky"]}})
                done()
                // mongoose.connection.db.collection('Planet').drop()
                // mongoose.connection.db.collection('User').drop(done)
        }).catch(err => null)
    }).timeout(5000)

    test('Server Init should return 200', done => {
        request.get(base, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            done();
        })
    }).timeout(4000)
})
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
    const form3 = {
        "email": "ky@ky",
        "username": "usability-testing",
        "password": "123456"
    }
    test('should return 201 created', done => {
        // request.post({ url: base + '/user/register', headers }).form(form3)
        request.post({ url: base + '/user/register', headers }).form(form2)
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

