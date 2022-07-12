// Para selecionar o ambiente do sistema 
const environment = process.env.ENVIRONMENT || 'development'; 

const config = require('../../knexfile')[environment]; // <-- para puxar atributos de forma dinâmica

const knex = require('knex')(config);

module.exports = knex;