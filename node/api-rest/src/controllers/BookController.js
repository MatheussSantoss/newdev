const database = require('../databases/knex');
const logger = require('../utils/logger');

exports.get = async (req, res) => {
  try {
    const sql = await database.
    select(
      ['books.id', 'books.title', 'authors.name as authorName']
    ).from('books').innerJoin('authors', 'authors.id', 'books.authorId');

    return res.status(200).send({
      books: sql
    });
  } catch (error) {
    logger(error.message);
    return res.status(500).send({error: error?.message || e})
  }
}

exports.post = async (req, res) => {
  try {
    await database('books').insert(req.body);
    
    return res.status(200).send({
      status: `Livro adicionado com sucesso`
    });
  } catch (error) {
    logger(error.message);
    return res.status(500).send({ error: error?.message || e });
  }
}

exports.getId = async (req, res) => {
  try {
    const params = req.params;
    const [book] = await database.select('*').from('books').where({id: params.id}).limit(1);

    if (!book) {
      return res.status(404).send(`Não foi possível encontrar um livro no id ${params.id}`);
    }

    return res.status(200).send({data: book});
  } catch (error) {
    logger(error.message);
    return res.status(500).send({error: error?.message || e});
  }
}

exports.delete = async (req, res) => {
  try {
    const params = req.params;
    const [bookToRemove] = await database.select('*').from('books').where({id: params.id}).limit(1);

    if (!bookToRemove) {
      return res.status(404).send(`Não foi possível encontrar um livro no id ${params.id}`);
    }

    await database.delete(params.id).from('books').where({id: params.id});

    return res.status(200).send({status: 'Livro removido com sucesso', data: bookToRemove});
  } catch (error) {
    logger(error.message);
    return res.status(500).send({error: error?.message || e});
  }
}

exports.put = async (req, res) => {
  try {
    const params = req.params;
    const [bookToUpdate] = await database.select('*').from('books').where({id: params.id}).limit(1);

    if (!bookToUpdate) {
      return res.status(404).send(`Não foi possível encontrar um livro no id ${params.id}`);
    }

    const nextBook = req.body;

    await database.update({title: nextBook.title}).from('books').where({id: params.id});

    return res.status(200).send({status: 'Livro atualizado com sucesso', data: bookToUpdate});
  } catch (error) {
    logger(error.message);
    return res.status(500).send({error: error?.message || e});
  }
}

// exports.patch = (req, res) => {
//   const pushbook = request.pushbook
//   return res.send('API the books push', pushbook)
// }