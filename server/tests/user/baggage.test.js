const chai = require('chai');
const expect = chai.expect;
const agent = require('../auth/login.test')

suite('Baggage', () => {

    test('Save Item (( should return 201', done => {
        agent[0].post('/user/baggage/goods')
            .send({ item: { name_zh: 'test~' } })
            .end((err, res) => {
                expect(res).have.status(201);
                done();
            });
    })

    test('Use Item ' , async () => {
        let UserData = await agent[0].get('/user');
        id = UserData.body.baggage.goods[0]._id;
        agent[0].delete(`/user/baggage/goods/${id}`)
            .end( ( err ,res ) => {
                expect(res).have.status(202);
            })
    })

})