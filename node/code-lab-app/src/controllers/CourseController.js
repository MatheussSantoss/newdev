const database = require('../databases/knex');
const logger = require('../utils/logger');

exports.getAll = async(req, res) => {
  try {
    const sql = await database.select(
      ['courses.id','courses.title', 'courses.description', 'professors.name as professorName']
    ).from('courses').innerJoin('professors', 'professors.id', 'courses.professorId');

    return res.status(200).send({
      courses: sql
    });
  } catch (error) {
    logger(error.message);
    return res.status(500).send({error: error?.message || e});
  };
};

exports.post = async(req, res) => {
  try {
    if (!req.body.title || !req.body.description) {
      return res.status(500).send(`Informação Incompleta`);
    }
    await database('courses').insert(req.body);
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

    const [course] = await database.select('*').from('courses').where({id: params.id}).limit(1);
    
    if (!course) {
      return res.status(404).send(`O registro com id: ${params.id} não foi encontrado`);
    }

    return res.status(200).send({name: course.title, avatar: course.description});
  } catch (error) {
    logger(error.message);
    return res.status(500).send({error: error?.message || e});
  }
}

exports.delete = async (req, res) => {
  try {
    const params = req.params;
    const [courseToRemove] = await database.select('*').from('courses').where({id: params.id}).limit(1); 

    if (!courseToRemove) {
      return res.status(404).send(`O registro com id: ${params.id} não foi encontrado`);
    };

    await database.delete(params.id).from('courses').where({id: params.id});
    return res.status(200).send({status: `Registro removido com sucesso`, course: courseToRemove});
  } catch (error) {
    logger.error(error.message);
    return res.status(500).send({error: error?.message || e});
  }
}

exports.put = async(req, res) => {
  try {
    const params = req.params;
    const [previousCourse] = await database.select('*').from('courses').where({id: params.id}).limit(1); 

    if (!previousCourse) {
      return res.status(404).send(`O registro com id: ${params.id} não foi encontrado`);
    };

    const nextCourse = req.body; 
    await database.update({title: nextCourse.title, description: nextCourse.description}).from('courses').where({id: previousCourse.id});
    return res.status(200).send({status: `Registro atualizado com sucesso`, data: nextCourse});
  } catch (error) {
    logger.error(error.message);
    return res.status(500).send({error: error?.message || e});
  }
}