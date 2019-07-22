const expect = require('chai').expect
const agent = require('../user/login.test');

suite('Planet' , () =>{ 
    test('New Planet', done =>{
        agent.post('/planet')
            .send({
                name : "test",
                type : "testyo",
            })
            .end((err,res)=>{
                expect(res).have.status(201);
                done(err);
            })
    })
})