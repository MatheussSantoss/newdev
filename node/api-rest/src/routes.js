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
routes.patch('/authors/:id', authorsController.patch)


//-----------------------BookController---------------------

routes.get('/',bookController.book)

routes.get('/books', bookController.bookGet)
routes.delete('/books', bookController.bookDelete)
routes.put('/books', bookController.bookPut)
routes.patch('/books', bookController.bookPatch)

//------------------------------------------------------
module.exports = routes