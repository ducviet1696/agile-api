const chai     = require('chai');
const chaiHttp = require('chai-http');
const server   = require('../server');
const should   = chai.should();

chai.use(chaiHttp);

describe('auth', () => {
    beforeEach((done) => {
        done();
    });
    describe('/POST login', () => {
        it('login to agile', (done) => {
            let account = {
                username: 'admin@gmail.com',
                password: '123456',
            };
            chai.request(server)
                .post('/v1/login')
                .send(account)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('code').eql('AGILE_SUCCESS');
                    res.body.should.have.property('token').be.a('string');
                    done();
                });
        });

        it('login with the wrong account', (done) => {
            let account = {
                username: 'admin@gmail.com',
                password: '1234567',
            };
            chai.request(server)
                .post('/v1/login')
                .send(account)
                .end((err, res) => {
                    res.should.have.status(401);
                    res.body.should.be.a('object');
                    res.body.should.have.property('code').eql('AGILE_UNAUTH_INCORRECT_PASSWORD');
                    res.body.should.have.property('message').eql('Password mismatch');
                    done();
                });
        });
    });
});
