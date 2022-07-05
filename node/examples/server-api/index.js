// Disponibilizamos recursos para o usuário, que os requisita
// Recursos são tudo que possuímos e mostramos para o Usuário 
// Request são os atributos e métodos, é de onde vem a requisição
// Response é a resposta que será dada pelo servidor a request

const http = require('http');
const URL = require('url');
const fs = require('fs');
const path = require('path');
let users = require('./users.json');

const getUsers = (request, response) => {
  const {name, lastName, age, remove} = URL.parse(request.url, true).query;

  let message = '';

  response.writeHead(200, {
    'Access-Control-Allow-Origin': '*'
  });

  // if (!name) {
  //   response.writeHead(400, {
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return response.end('Não foi informado o nome');
  // }

  if (name || lastName || age) { 
    const user = {
      name, lastName, age
    }

    if (remove) {
      message = 'Registro removido com suceso';
      const found = users.filter(user => user.name == name)
      users = users.filter(user => user.name != name)

      if (!found.length) {
        response.end('Usuário não encontrado');
      }
    }else{
      message = 'Registro salvo com sucesso';
      users.push(user);
    }

    // 1° parâmetro : caminho absoluto do arquivo, 2° arquivo que será enviado, 3° callback function
    fs.writeFile(
      path.join(__dirname, 'users.json'),
      JSON.stringify(users, null, 2),
      (error) => {
        if (error) return; 

        console.log('Salvou o registro com sucesso')
        response.end(JSON.stringify({
          status: message,
          data: user
        }))
      }
    )
  }else{
    // Resposta para o cliente
    response.end(JSON.stringify(users));
  }
}

const server = http.createServer(getUsers);

server.listen(6924, (request, response) => {
  console.log('API listening on http://localhost:6924');
})

