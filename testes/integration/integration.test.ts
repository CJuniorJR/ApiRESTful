import { app, request, expect } from './config/helpers';

describe('Testes de Integração', () => {
    
    describe('GET /api/user', () => {
        it('Deve retornar um JSON com todos os usuários', done => {
            request(app)
                .get('/api/user')
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                });
        });
    });

    describe('GET /api/user/:id', () => {
        it('Deve retornar um JSON com apenas um usuário', done => {
            request(app)
                .get(`/api/user/${1}`)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                });
        });
    });

    describe('POST /api/user', () => {
        it('Deve criar um usuário', done => {
            const user = {
                nome: 'Teste'
            }
            request(app)
                .post('/api/user')
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                });
        });
    });

    describe('PUT /api/user/:id', () => {
        it('Deve atualizar um usuario', done => {
            const user = {
                nome: 'Teste update'
            }
            request(app)
                .put(`/api/user/${1}`)
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                });
        });
    });

    describe('DELETE /api/user/:id', () => {
        it('Deve deletar um usuário', done => {
            request(app)
                .delete(`/api/user/${1}`)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                });
        });
    });
});