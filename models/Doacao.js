const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/db');

class Doacao extends Model {}

Doacao.init({
    doador: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, 
{
    sequelize, 
    modelName:'doacao', 
    tableName: 'doacoes'
});

module.exports = Doacao;