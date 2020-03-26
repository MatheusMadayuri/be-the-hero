const knex = require('knex');
const configuration = require('../../knexfile'); 
/** "../" é usado para voltar uma pasta, neste caso 2 pastas para acessar o arquivo na pasta raiz */

const connection = knex(configuration.development);
/** development, porque é onde está a configuração da conexão do no BD */

module.exports = connection; /** Exportar esta variável com seu valor agregado. */
/** Após isso, devemos importar onde sempre precisarmos de nos comunicar com o BD (routes.js) */