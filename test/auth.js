const chai   = require('chai');
const chaiHttp = require('chai-http');
const server   = require('../server');
const should   = chai.should();

chai.use(chaiHttp);

describe('auth', () => {
    beforeEach((done) => {
        //Before each test we empty the database in your case
        done();
    });
    /*
     * Test the /GET route
     */
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
                    console.log(res.body);
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
                    console.log(res.body);
                    done();
                });
        });
    });
});
