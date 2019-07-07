const chai = require('chai');
const expect = chai.expect;
var request = require('request').defaults({ jar: true });

const base = 'http://localhost:3000';
const headers = { 'Content-Type': 'text/plain' };
const form = {
    "email": "testa@yahoo.com.tw",
    "username": "yosa",
    "password": "1234"
};

describe('Server Init', () => {
    it('should return 200', done => {
        request.get(base, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            done();
        })
    })
})
describe('User', () => {
    describe('#Register-normal', () => {
        it('should return [201,400,406]', done => {
            request.post({ url: base + '/user/register', headers }, (err, res, body) => {
                expect(res.statusCode).to.be.oneOf([201, 400, 406])
                console.log(res.statusCode)
                done();
            }).form(form);
        })
    })
    describe('#login', () => {
        it('should return 401 404 200', done => {
            request.post(base+'/user/login',(err,res,body)=>{
                expect(res.statusCode).to.be.oneOf([401 ,404 , 200])
                console.log(res.statusCode)
                done();
            }).form(form);
        })
    })
});

