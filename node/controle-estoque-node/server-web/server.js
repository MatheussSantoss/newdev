const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  console.log('server on')

  const url = req.url;

  let page = url === '/' ? 'index.html' : req.url;

  if (url === '/registro') {
    page = 'register.html';
  }

  if (url === '/estoque') {
    page = 'storage.html';
  }

  const pagePath = path.join(__dirname, 'public', page);

  fs.readFile(
    pagePath,
    (error, content) => {
      if (error) {return error;}
      
      return res.end(content);
    }
  )
})

server.listen(2424, () => {
  console.log('Server is listening on http://localhost:2424');
})