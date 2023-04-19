
require('dotenv').config();
const express = require('express');
const app = express();

const ong = require('./routes/ong');
const doacoes = require('./routes/doacoes');

// para receber a requisição no formato json
app.use(express.json());

// rotas
app.use('/ong', ong);
app.use('/ong/doacoes', doacoes);

// define a porta para o servidor
app.listen(process.env.DB_PORT);