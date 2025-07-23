const request = require('supertest');
const { expect } = require('chai');

describe('login', () => {
    describe('POST /login', () => {
        it('should return 200 for valid credentials', async () => {
            const resposta = await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                        'username': 'julio.lima',
                        'senha': '123456'
                });
            console.log(resposta.body);
            console.log(resposta.status);
            expect(resposta.status).to.equal(200);  
            expect(resposta.body).to.have.property('token');
            expect(resposta.body.token).to.be.a('string');
        });
    });
})