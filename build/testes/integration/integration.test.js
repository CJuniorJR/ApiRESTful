"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
describe('Testes de Integração', function () {
    describe('GET /api/user', function () {
        it('Deve retornar um JSON com todos os usuários', function (done) {
            helpers_1.request(helpers_1.app)
                .get('/api/user')
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('GET /api/user/:id', function () {
        it('Deve retornar um JSON com apenas um usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .get("/api/user/" + 1)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('POST /api/user', function () {
        it('Deve criar um usuário', function (done) {
            var user = {
                nome: 'Teste'
            };
            helpers_1.request(helpers_1.app)
                .post('/api/user')
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('PUT /api/user/:id', function () {
        it('Deve atualizar um usuario', function (done) {
            var user = {
                nome: 'Teste update'
            };
            helpers_1.request(helpers_1.app)
                .put("/api/user/" + 1)
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('DELETE /api/user/:id', function () {
        it('Deve deletar um usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .delete("/api/user/" + 1)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
});
