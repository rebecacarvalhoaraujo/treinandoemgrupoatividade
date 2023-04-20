
require('dotenv').config();
const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const ong = require('./routes/ong');
const doacoes = require('./routes/doacoes');

// para receber a requisição no formato json
app.use(express.json());

// rotas
app.use('/ong', ong);
app.use('/ong/doacoes', doacoes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// define a porta para o servidor
app.listen(process.env.DB_PORT);