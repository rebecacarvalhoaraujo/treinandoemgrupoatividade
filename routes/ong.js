const express = require('express');
const ong = express.Router();
const Ong = require('../models/Ong');

ong.route('/')
.get(async (req, res) => {
    res.json({mensagem: "rota ong GET"})
})
.post(async (req, res) => {

    const {nome, tipo, desc, cnpj, data_criacao} = req.body;

    if (!nome || !tipo || !desc || !cnpj || !data_criacao) {
        return res.status(400).json({ mensagem: "campo obrigatório não informado" });
    }
    
    try {
        const novaOng = await Ong.create(req.body);
        res.status(201).json({mensagem: "Ong criada com sucesso, id: $(novaOng.id)"});

    } catch (err) {
        res.status(400).json(err);
    }
    
})
.put(async (req, res) => {
    res.json({mensagem: "rota ong PUT"})
})
.delete(async (req, res) => {
    res.json({mensagem: "rota ong DELETE"})
});

module.exports = ong;