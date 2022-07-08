exports.book = (request,response) => {
  console.log('API the books')
  return response.status(200).send('API the books')
}

exports.bookGet = (request, response) => {
  const getbook = request.getbook
  return response.send('API the books GET', getbook)
}

exports.bookDelete = (request, response) => {
  const deletebook = request.deletebook
  return response.send('API the books delete', deletebook)
}

exports.bookPut = (request, response) => {
  const putbook = request.putbook
  return response.send('API the books put', putbook)
}

exports.bookPatch = (request, response) => {
  const pushbook = request.pushbook
  return response.send('API the books push', pushbook)
}