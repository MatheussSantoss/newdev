const http = require('http');
const URL = require('url');
const users = require('./users.json');

// Disponibilizamos recursos para o usuário, que os requisita
// Recursos são tudo que possuímos e mostramos para o Usuário 

// Request são os atributos e métodos, é de onde vem a requisição
// Response é a resposta que será dada pelo servidor a request
http.createServer((req, res) => {
  const {name, lastName, age} = URL.parse(req.url, true).query;

  if (name || lastName || age) { 
    console.log('query', name, lastName, age)
  }
  // Resposta para o cliente
  res.end(JSON.stringify(users));
}).listen(6924, () => {
  console.log('API is running on port 6924');
})