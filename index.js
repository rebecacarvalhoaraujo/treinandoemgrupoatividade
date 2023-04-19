
require("dotenv").config();
const express = require('express');
const app = express();

const ong = require('./routes/ong');
const doacoes = require('./routes/doacoes');


app.use(express.json());

app.use('/ong', ong)
app.use('/doacoes', doacoes)

app.listen(process.env.DB_PORT);