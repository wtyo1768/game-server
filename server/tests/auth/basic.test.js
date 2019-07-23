const chai = require('chai');
const expect = chai.expect;
var request = require('request').defaults({ jar: true });

const base = 'http://localhost:3000';
const headers = { 'Content-Type': 'text/plain' };
// const form = {
//     "email": "test@yahoo.com.",
//     "username": "yosa",
//     "password": "123456"
// };
const form = [
    {
        "email": "test@yahoo.com.",
        "username": "yosa",
        "password": "123456"
    }, {
        "email": "azookeke@gmail.com",
        "username": "hahaha",
        "password": "111111"
    }, {
        "email": "dosent_exist@gmail.com",
        "username": "!@#$%",
        "password": "111111"
    }
] 

suite('Server Intest', () => {
    test('should return 200', done => {
        request.get(base, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            done();
        })
    })
})
suite('User', () => {
    suite('#Register', () => {
        test('should return 201,400,406', done => {
            request.post({ url: base + '/user/register', headers }, (err, res, body) => {
                expect(res.statusCode).to.be.oneOf([201, 400, 406])
                logger.info(res.statusCode)
                done();
            }).form(form[0]);
        })
        //不合法字元
        test('should return 400', done => {
            request.post({ url: base + '/user/register', headers }, (err, res, body) => {
                expect(res.statusCode).to.equal(400)
                console.log(res.statusCode)
                done();
            }).form(form[2]);
        })
        //信箱已註冊過
        test('should return 406', done => {
            request.post({ url: base + '/user/register', headers }, (err, res, body) => {
                expect(res.statusCode).to.equal(406)
                console.log(res.statusCode)
                done();
            }).form(form[1]);
        })
    })
    suite('#login', () => {
        test('should return 401 404 200', done => {
            request.post(base+'/user/login',(err,res,body)=>{
                expect(res.statusCode).to.be.oneOf([401 ,404 , 200])
                logger.info(res.statusCode)
                done();
            }).form(form[0]);
        })
        //帳號或密碼錯誤
        test('should return 401', done => {
            request.post(base+'/user/login',(err,res,body)=>{
                expect(res.statusCode).to.equal(401)
                console.log(res.statusCode)
                done();
            }).form(form[1]);
        })
        //帳號不存在
        test('should return 404', done => {
            request.post(base+'/user/login',(err,res,body)=>{
                expect(res.statusCode).to.equal(404)
                console.log(res.statusCode)
                done();
            }).form(form[2]);
        })
    })
});

