const connection = require('../database/connection');
const crypto  = require('crypto');

module.exports = {
  index: async (request, response) => {
    const ongs = await connection('ongs').select('*'); // returns a array
    return response.json(ongs);
  },
  create: async (request, response) => {
    const { name, email, whatsapp, city, uf } = request.body;
    const id = crypto.randomBytes(4).toString('HEX').toUpperCase();
    await connection('ongs').insert({ id, name, email, whatsapp, city, uf })
    return response.json({ id });
  },
}