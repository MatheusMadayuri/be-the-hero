const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); 
app.use(routes);
/** Antes que qualquer requisição, pegue o express e converta o corpo da minha requisição em conteúdo js*/


/*
 *Rota / Recursos - estão vinculados as tabelas do BD.
 */

/**
* Métodos HTTP
*
*GET: Buscar/listar uma informação no back-end
*POST: Criar uma informação no back-end
*PUT: Alterar um informação no back-end
*DELETE: Deletar uma informação no back-end
*/

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 * Route Params: Parâmetros utilizados par aidentificar recursos
 * Request body: Corpo da requisição, utilizado par acriar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostegreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */
/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() 
 */





app.listen(3333);
