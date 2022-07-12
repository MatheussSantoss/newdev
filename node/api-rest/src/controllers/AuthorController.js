const database = require('../databases/knex'); 

// npx knex migrate:make create-table-authors

exports.findAll = async (request, response) => {
    try {
      const sql = await database.select('*').from('authors');

      return response.status(200).send({
        authors: sql
      });
    } catch (error) {
      return response.status(500).send({error: error?.message || e});
    }
}

exports.create = async (request, response) =>{
  try {
    await database('authors').insert(request.body);

    console.log('Recebendo dados', request.body);
    return response.status(200).send({
      status: 'sucess'
    });
  } catch (error) {
    return response.status(500).send({error: error?.message || e});
  }
}

exports.getId = (request, response) =>{
  const params = request.params
  console.log('Query string authors',params)
  return response.status(200).send(`Acessando recurso /authors method get by ID ${params.id}`)
}

exports.delete = (request, response) =>{
  const params = request.params
  console.log('Query string authors',params)
  return response.status(200).send(`Acessando recurso /authors method delete by ID ${params.id}`)
}

exports.put = (request, response) =>{
  const params = request.params
  console.log('Query string authors',params)
  return response.status(200).send(`Acessando recurso /authors method PUT by ID ${params.id}`)
}

exports.patch = (request, response) =>{
  const params = request.params
  console.log('Query string authors',params)
  return response.status(200).send(`Acessando recurso /authors method Patch by ID ${params.id}`)
}

