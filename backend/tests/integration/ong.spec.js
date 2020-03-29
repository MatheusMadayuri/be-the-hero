const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterEach(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs') //.set('Authorization', 'id-válido_ong')
            .send({
                name: "APAD2",
                email: "contato@haha.com",
                whatsapp: "47000000000",
                city: "Rio do Sul",
                uf: "SC"
             });

        //console.log(response.body); Retorna o resultado da ONG criada apenas no BD teste.
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});