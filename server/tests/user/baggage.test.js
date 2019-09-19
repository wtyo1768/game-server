const chai = require('chai');
const expect = chai.expect;
const agent = require('../auth/login.test')

suite('Baggage', () => {

    test('Save New Item (( should return 201', done => {
        agent[0].post('/user/baggage/sketch')
            .send([
                    { name_zh :  'test1' , id : '1', amount : 4 } ,
                    { name_zh :  'test2' , id : '2', amount : 5 } ,
            ])
            .end((err, res) => {
                expect(res).have.status(201);
                done();
            });
    })
    test('Save Old Item (( should return 201', done => {
        agent[0].post('/user/baggage/goods')
            .send([
                    { name_zh :  'test1' , id : '1', amount : 87 } ,
            ])
            .end((err, res) => {
                expect(res).have.status(201);
                done();
            });
    })
    test('Use Item ' , async () => {
        let UserData = await agent[0].get('/user');
        id = UserData.body.baggage.goods[0].id;
        amount = 7;
        agent[0].delete(`/user/baggage/goods/?id=${id}&amount=${amount}`)
            .end( ( err ,res ) => {
                expect(res).have.status(202);
            })
    })

})