const { default: knex } = require('knex');
const database = require('../databases/knex');
const logger = require('../utils/logger');

exports.getAll = async(req, res) => {
  try {
    const sql = await database.select(
      ['lessons.id', 'lessons.title', 'lessons.description', 'lessons.videoURL', 'professors.name as professorName', 'courses.title as courseTitle'])
      .from('lessons')
      .innerJoin('professors', 'professors.id', 'lessons.professorId')
      .innerJoin('courses', 'courses.id', 'lessons.courseId');

    return res.status(200).send({
      lessons: sql
    });
  } catch (error) {
    logger(error.message);
    return res.status(500).send({error: error?.message || e});
  };
};

exports.post = async(req, res) => {
  try {
    const requiredFields = ["title", "videoURL", "courseId", "professorId"];
    const requiredFieldsExist = [];

    requiredFields.forEach(fields => {
      if (!req.body[fields]) {
        requiredFieldsExist.push(fields);
      }
    })

    if (!Object.keys(req.body).length) {
      return res.status(400).send({
        status: 'Informação Incompleta',
        requiredFiles: requiredFieldsExist
      });
    }

    // git clone

    if (requiredFieldsExist.length) {
      return res.status(400).send({
        status: 'Arquivos Faltantes',
        requiredFiles: requiredFieldsExist
      });
    };

    const [courses] = await database.select('*').from('courses').where({id: Number(req.body.courseId)});
    const [professors] = await database.select('*').from('professors').where({id: Number(req.body.professorId)});

    if(!courses ) {
      return res.status(404).send({
        status: 'Curso Não Encontrado'
      });
    };

    if(!professors) {
      return res.status(404).send({
        status: 'Professor Não Encontrado'
      });
    };

    await database('lessons').insert(req.body);
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

    const [lesson] = await database.select('*').from('lessons').where({id: params.id}).limit(1);

    const [sql] = await database.select(
      ['lessons.id', 'lessons.title', 'lessons.description', 'lessons.videoURL', 'professors.name as professorName', 'courses.title as courseTitle'])
      .from('lessons')
      .innerJoin('professors', 'professors.id', 'lessons.professorId')
      .innerJoin('courses', 'courses.id', 'lessons.courseId');
    
    lesson.professorId = sql.professorName;
    lesson.courseId = sql.courseTitle;

    if (!lesson) {
      return res.status(404).send(`O registro com id: ${params.id} não foi encontrado`);
    }

    return res.status(200).send({lesson});
  } catch (error) {
    logger(error.message);
    return res.status(500).send({error: error?.message || e});
  }
}

exports.delete = async (req, res) => {
  try {
    const params = req.params;
    const [lessonToRemove] = await database.select('*').from('lessons').where({id: params.id}).limit(1); 

    if (!lessonToRemove) {
      return res.status(404).send(`O registro com id: ${params.id} não foi encontrado`);
    };

    await database.delete(params.id).from('lessons').where({id: params.id});
    return res.status(200).send({status: `Registro removido com sucesso`, lesson: lessonToRemove});
  } catch (error) {
    logger.error(error.message);
    return res.status(500).send({error: error?.message || e});
  }
}

exports.put = async(req, res) => {
  try {
    const params = req.params;
    const [previousLesson] = await database.select('*').from('lessons').where({id: params.id}).limit(1); 

    if (!previousLesson) {
      return res.status(404).send(`O registro com id: ${params.id} não foi encontrado`);
    };

    const nextLesson = req.body; 
    await database.update({title: nextLesson.title, description: nextLesson.description}).from('lessons').where({id: previousLesson.id});
    return res.status(200).send({status: `Registro atualizado com sucesso`, data: nextLesson});
  } catch (error) {
    logger.error(error.message);
    return res.status(500).send({error: error?.message || e});
  }
}