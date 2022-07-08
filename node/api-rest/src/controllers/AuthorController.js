exports.findAll =  (request, response) => {
    const query = request.query;
    console.log('Query string authors', query);
    return response.status(200).send('Acessando recurso /authors method get');
}

exports.create = (request, response) =>{
  console.log('Recebendo dados', request.body)
  return response.status(200).send('Acessando recurso /authors method post')
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

