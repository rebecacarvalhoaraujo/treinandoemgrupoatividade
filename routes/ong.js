const express = require('express');
const ong = express.Router();
const Ong = require('../models/Ong');

ong.route('/')
.get(async (req, res) => {

    try {
        const novaOng = await Ong.findAll();
        res.status(200).json(ongs);

    } catch (err) {
        res.status(500).json(err);
    }
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
    const { id } = req.body;

        if (!id) {
            return res.status(400).json({ mensagem: "campo obrigatório não informado" });
        }

        try{
            const response = await Ong.destroy({ where: { id: id } });
            res.status(200).json({ mensagem: `Ong deletada com sucesso, id: ${id}` });
        }catch(err){
            res.status(500).json(err);
        }
});

module.exports = ong;