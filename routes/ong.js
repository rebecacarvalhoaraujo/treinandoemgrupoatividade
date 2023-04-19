const express = require('express');
const ong = express.Router();

ong.route('/')
.get(async (req, res) => {
    res.json({mensagem: "rota ong GET"})
})
.post(async (req, res) => {
    res.json({mensagem: "rota ong POST"})
})
.put(async (req, res) => {
    res.json({mensagem: "rota ong PUT"})
})
.delete(async (req, res) => {
    res.json({mensagem: "rota ong DELETE"})
});

module.exports = ong;