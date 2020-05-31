const knex = require('knex');
const dbConfigurations = require('../../knexfile'); //Configurações do banco de dados (knexfile.js)

const dbConnection = knex(dbConfigurations.development);    //Captura das configurações de desenvolvimento

module.exports = dbConnection;  //Exportando a conexão com o banco de dados