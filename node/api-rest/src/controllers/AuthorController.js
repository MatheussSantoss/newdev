const database = require('../databases/knex'); 
const logger = require('../utils/logger');

// npx knex migrate:make create-table-authors

exports.findAll = async (request, response) => {
  try {
    const sql = await database.select('*').from('authors');
    return response.status(200).send({
      authors: sql
    });
  } catch (error) {
    logger(error.message);
    return response.status(500).send({error: error?.message || e});
  }
}

exports.create = async (request, response) =>{
  try {
    await database('authors').insert(request.body);

    console.log('Recebendo dados', request.body);
    return response.status(200).send({
      status: 'success'
    });
  } catch (error) {
    logger(error.message);
    return response.status(500).send({error: error?.message || e});
  }
}

exports.getId = async (request, response) =>{
  try {
    const params = request.params;
    
    const [author] = await database.select('*').from('authors').where({id: params.id}).limit(1);

    if (!author) {
      return response.status(404).send(`O registro com id: ${params.id} não foi encontrado`);
    }

    return response.status(200).send({status: 'Author', data: author})
  } catch (error) {
    logger(error.message);
    return response.status(500).send({error: error?.message || e});
  }
}

exports.delete = async (request, response) =>{
  try {
    const params = request.params;
    const [authorToRemove] = await database.select('*').from('authors').where({id: params.id}).limit(1);
    if (!authorToRemove) {
      return response.status(404).send(`O registro com id: ${params.id} não foi encontrado`);
    }

    await database.delete(params.id).from('authors').where({id: params.id});

    return response.status(200).send({status: 'Registro removido com sucesso', data: authorToRemove});
  } catch (error) {
    logger(error.message);
    return response.status(500).send({error: error?.message || e});
  }

}

exports.put = async (request, response) =>{
  try {
    const params = request.params;

    // Entrará dentro do Banco de dados, irá pegar tudo contido dentro da tabela 'Authors'
    const [previousAuthor] = await database.select('*').from('authors').where({id: params.id}).limit(1)
    // where('id', params.id);

    
    if (!previousAuthor) {
      return response.status(404).send(`O registro com id: ${params.id} não foi encontrado`);
    }

    const nextAuthor = request.body;
    console.log('author ENCONTRADO ->', previousAuthor);
    console.log('author UPDATE ->', nextAuthor);
    await database.update({name: nextAuthor.name}).from('authors').where({id: previousAuthor.id});

    // Precisamos buscar no banco de dados, o possível registro
    // Se não existir, é preciso informar para o client que não foi encontrado
    // Capturar o valor do body no qual o cliente quer atualizar e modificar a informação no Banco de Dados
    // Avisar o cliente que atualizamos o registro e retornar o registro atualizado

    return response.status(200).send({status: `Registro atualizado com sucesso`, data: nextAuthor})
  } catch (error) { // Tratamento de excessão, trata os erros que ocorrem
    logger(error.message);
    return response.status(500).send({error: error?.message || e});
  }
}