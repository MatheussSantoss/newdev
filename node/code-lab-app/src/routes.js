const express = require('express');
// Liga as rotas ao Express
const routes = express.Router();

const indexController = require('./controllers/IndexController');
const professorController = require('./controllers/ProfessorController');
const courseController = require('./controllers/CourseController');

//  Index Routes
routes.get('/', indexController.index);

// Professors Routes
routes.get('/professors', professorController.getAll);
routes.post('/professors', professorController.post);

routes.get('/professors/:id', professorController.getId);
routes.delete('/professors/:id', professorController.delete);
routes.put('/professors/:id', professorController.put);

// Courses Routes
routes.get('/courses', courseController.getAll);
routes.post('/courses', courseController.post);

routes.get('/courses/:id', courseController.getId);
routes.delete('/courses/:id', courseController.delete);
routes.put('/courses/:id', courseController.put);
module.exports = routes;