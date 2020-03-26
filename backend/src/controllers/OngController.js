const crypto = require('crypto');
const connection = require('../database/connection'); 

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');   /**Vai criar 4 caracteres aleatórios e converter em tipo hexadecimal */

        await connection('ongs').insert({   /**await fará com que o node aguarde o INSERT a finalizar o cadastro */
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        return response.json({ id }) 
    }
};