// O Express serve para facilitar a criação do server e seus métodos
const express = require('express');
// O CORS serve para organização das rotas do servidor
const cors = require('cors');
// Cria a váriavel das rotas
const routes = require('./routes');

const PORT = 7003;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes, () => {
});

app.listen(PORT, () => {
  console.log('API is listening on port: http://localhost:', PORT);
});