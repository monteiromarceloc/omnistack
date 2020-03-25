const connection = require('../database/connection');

module.exports = {
  index: async (request, response) => {
    const incidents = await connection('incidents').select('*');
    return response.json(incidents);
  },
  create: async (request, response) => {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;
    // const [id] = await connection('incidents').insert({ ong_id, title, description, value })
    const result = await connection('incidents').insert({ ong_id, title, description, value })
    const id = result[0];
    return response.json({ id });
  },
}