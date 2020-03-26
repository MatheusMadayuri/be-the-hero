const connection = require('../database/connection');

module.exports = {
    async index (request, response){
        const{ page = 1 } = request.query;

        const [count] = await connection('incidents').count();
        console.log(count);
        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1 )*5)
        .select([
            'incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf'
        ]);
        /**limit - Limitando a mostragem em apenas 5 incidentes */
        /**logica do offset:
         * (( 1-1 = 0)*5 = 0) - irá mostrar os 5 primeiros
         * ((2-1 = 1)*5 = 5) - irá pular 5 e listar os 5 próximos
         * etc...
         */
        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async create(request, response){
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });
        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization; /**Preciso verificar se este incidente é da ONG que quer deletar */

        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first();
        if(incident.ong_id != ong_id){
            return response.status(401).json({ error: 'Operation not permitted.'});
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
  
}