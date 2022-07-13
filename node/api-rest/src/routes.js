const express = require('express')
const routes = express.Router()
const indexController = require('./controllers/IndexController')
const bookController = require('./controllers/BookController')
const authorsController = require('./controllers/AuthorController')
// index rotes
routes.get('/', indexController.index)
// authors rotes
routes.get('/authors', authorsController.findAll) 
routes.post('/authors', authorsController.create)

routes.get('/authors/:id', authorsController.getId)
routes.delete('/authors/:id', authorsController.delete)
routes.put('/authors/:id', authorsController.put)

//-----------------------BookController---------------------

routes.get('/books', bookController.get)
routes.post('/books', bookController.post)

routes.get('/books/:id', bookController.getId)
routes.delete('/books/:id', bookController.delete)
routes.put('/books/:id', bookController.put)
// routes.patch('/books', bookController.bookPatch)

//------------------------------------------------------
module.exports = routes