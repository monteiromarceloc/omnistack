const connection = require('../database/connection');

module.exports = {

  index: async (request, response) => {
    const { page = 1 } = request.query
    
    const incidents = await connection('incidents')
      .limit(5)
      .offset((page - 1) * 5) // criando paginação
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id') // relacionando com dados da ong
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf',
      ]);

    const [counter] = await connection('incidents').count();
    const count = counter['count(*)'];

    response.header('X-Total-Count', count)
    return response.json({incidents});
  },

  create: async (request, response) => {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;
    // const [id] = await connection('incidents').insert({ ong_id, title, description, value })
    const result = await connection('incidents').insert({ ong_id, title, description, value })
    const id = result[0];
    return response.json({ id });
  },

  delete: async (request, response) => {
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id) // condição
      .select('ong_id') // o que eu quero
      .first();

    if (incident.ong_id != ong_id){
      return response.status(401).json({ error: 'Operation not permitted: authenticated ong has no acess over this incident.' })
    }

    await connection('incidents').where('id', id).delete();

    return response.status(204).send();
  },

}