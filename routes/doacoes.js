const express = require('express');
const doacoes = express.Router();

doacoes.route('/')
.get(async (req, res) => {
    res.json({mensagem: "rota doacoes GET"})
})
.post(async (req, res) => {
    res.json({mensagem: "rota doacoes POST"})
})
.put(async (req, res) => {
    res.json({mensagem: "rota doacoes PUT"})
})
.delete(async (req, res) => {
    res.json({mensagem: "rota doacoes DELETE"})
});

module.exports = doacoes;