const knex = require('knex');
const configuration = require('../../knexfile');

// DEV
const connection = knex(configuration.development);

module.exports = connection;