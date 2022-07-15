const environment = process.env.ENVIROMNENT || 'development';

// Puxa a configuração do knexfile e o ambiente que está sendo trabalhado
const config = require('../../knexfile')[environment];

const knex = require('knex')(config);

module.exports = knex;