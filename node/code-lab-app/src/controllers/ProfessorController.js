const database = require('../databases/knex');
const logger = require('../utils/logger');

exports.getAll = async(req, res) => {
  try {
    const sql = await database.select('*').from('professors');
    return res.status(200).send({
      professors: sql
    });
  } catch (error) {
    logger(error.message);
    return res.status(500).send({error: error?.message || e});
  };
};

exports.post = async(req, res) => {
  try {
    if (!req.body.name || !req.body.avatar) {
      return res.status(500).send(`Informação Incompleta`);
    }
    await database('professors').insert(req.body);
    console.log('Receiving Data', req.body);
    return res.status(200).send({
      status: 'Sucessfully Added'
    });
  } catch (error) {
    logger(error.message);
    return res.status(500).send({error: error?.message || e});
  };
};

exports.getId = async(req, res) => {
  try {
    const params = req.params;

    const [professor] = await database.select('*').from('professors').where({id: params.id}).limit(1);
    
    if (!professor) {
      return res.status(404).send(`O registro com id: ${params.id} não foi encontrado`);
    }

    return res.status(200).send({name: professor.name, avatar: professor.avatar});
  } catch (error) {
    logger(error.message);
    return res.status(500).send({error: error?.message || e});
  }
}

exports.delete = async (req, res) => {
  try {
    const params = req.params;
    const [professorToRemove] = await database.select('*').from('professors').where({id: params.id}).limit(1); 

    if (!professorToRemove) {
      return res.status(404).send(`O registro com id: ${params.id} não foi encontrado`);
    };

    await database.delete(params.id).from('professors').where({id: params.id});
    return res.status(200).send({status: `Registro atualizado com sucesso`, professor: professorToRemove});
  } catch (error) {
    logger.error(error.message);
    return res.status(500).send({error: error?.message || e});
  }
}

exports.put = async(req, res) => {
  try {
    const params = req.params;
    const [previousProfessor] = await database.select('*').from('professors').where({id: params.id}).limit(1); 

    if (!previousProfessor) {
      return res.status(404).send(`O registro com id: ${params.id} não foi encontrado`);
    };

    const nextProfessor = req.body 
    console.log('author ENCONTRADO ->', previousProfessor);
    console.log('author UPDATE ->', nextProfessor);
    await database.update({name: nextProfessor.name, avatar: nextProfessor.avatar}).from('professors').where({id: previousProfessor.id});
    return res.status(200).send({status: `Registro atualizado com sucesso`, data: nextProfessor});
  } catch (error) {
    logger.error(error.message);
    return res.status(500).send({error: error?.message || e});
  }
}