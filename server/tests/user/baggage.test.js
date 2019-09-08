const chai = require('chai');
const expect = chai.expect;
const agent = require('../auth/login.test')

suite('Baggage' , () =>{

    test('Save Item ' , done => {
        agent[0].post('/user/baggage/ttest')
            .end( (err,res) =>{
                console.log(res.body)
                done();
            })
    })
})