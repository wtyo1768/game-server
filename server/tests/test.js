const mongoose = require('mongoose');
const url = `mongodb+srv://wtyo1768:s124930654@kyronus-dihrd.mongodb.net/yo?retryWrites=true`;
const request = require('request').defaults({ jar: true });
const base = 'http://localhost:3000';
const chai = require('chai')
const expect = chai.expect;

mongoose.Promise = global.Promise;
mongoose.connection.on('error', error => console.warn('Error : ', error));

suite('Server Init', () => {
    test('Waiting for Server Start', done => {
        setTimeout(done, 2000);
    }).timeout(3000);
})


suite('Test Init', () => {
    test('DB init', done => {
        new Promise((res, rej) => {
            !mongoose.connection.db ?
                res(mongoose.connect(url, { useNewUrlParser: true, })) : res();
        }).then(val => {
            // mongoose.connection.db.collection('Planet').remove({"owner":{$nin:["ky@ky"]}})
            // mongoose.connection.db.collection('User').remove({"email":{$nin:["ky@ky"]}})
            // done()
            mongoose.connection.db.listCollections({ name: 'Planet' }, { nameOnly: true })
                .next((err, colinfo) => {
                    if (colinfo)
                        mongoose.connection.db.collection('Planet').drop()
                })
            mongoose.connection.db.listCollections({ name: 'User' }, { nameOnly: true })
                .next((err, colinfo) => {
                    if (colinfo)
                        mongoose.connection.db.collection('User').drop()
                    done();
                })
        }).catch(err => console.error(err))
    }).timeout(5000)

    test('Server Init should return 200', done => {
        request.get(base, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            done();
        })
    }).timeout(4000)
})

require('./auth/signup.test');

require('./auth/login.test');

require('./user/user.service');

require('./planet/planet.test');

require('./user/friend.test');

require('./socket/socket.test');
