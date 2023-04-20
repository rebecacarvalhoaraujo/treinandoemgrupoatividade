const express = require('express');
const Doacao = require('../models/Doacao');
const Ong = require('../models/Ong');
const sequelize = require('../db/db');
const doacoes = express.Router();

doacoes.route('/')
    .get(async (req, res) => {
        const { ongId } = req.query;

        try {
            if (ongId) {
                const ongEncontrada = await Ong.findOne({ where: { id: ongId } });

                if (!ongEncontrada) {
                    return res.status(404).json({ mensagem: "ong inexistente." })
                }

                const total = await Doacao.findOne({
                    attributes: [
                        [sequelize.fn("SUM", sequelize.col("valor")), "valor"]
                    ],
                    where: { ongId }
                });
                
                res.status(200).json({mensagem: `A Ong: ${ongEncontrada.nome} recebeu R$ ${total.valor} em doações`});

            } else {
                const doacoes = await Doacao.findAll();
                res.status(200).json(doacoes);
            }

        } catch (err) {
            return res.status(500).json(err);
        }

    })
    .post(async (req, res) => {
        const { doador, valor, ongId } = req.body;

        if (!doador || !valor || !ongId) {
            return res.status(400).json({ mensagem: "campos obrigatórios ausentes" });
        }

        const ong = await Ong.findByPk(ongId);
        if (!ong) {
            return res.status(404).json({ mensagem: "ong não encontrada" });
        }

        try {
            const doacao = await Doacao.create({ doador, valor, ongId });
            res.status(201).json({ mensagem: `doação de R$ ${valor} para a Ong: ${ong.nome}` })
        } catch (err) {
            return res.status(500).json(err);
        }
    })
    .put(async (req, res) => {
        res.json({ mensagem: "Não é possível editar uma doação." })
    })
    .delete(async (req, res) => {
        res.json({ mensagem: "Não é possível deletar uma doação" })
    });

module.exports = doacoes;