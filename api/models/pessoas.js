'use strict'
module.exports = (sequelize, DataTypes) => {
    const Pessoas = sequelize.define('Pessoas', {
        nome: DataTypes.STRING,
        ativo: DataTypes.BOOLEAN,
        email: DataTypes.STRING,
        role: DataTypes.STRING
    }, {
        paranoid: true,
        defaultScope: { //Quero que todos os meus selects só retornem registros que tenham o atributo ativo, que é uma das colunas do meu banco, true.
            where: { ativo: true }
        }
    })
    Pessoas.associate = function(models) {
        Pessoas.hasMany(models.Turmas, {
            foreignKey: 'docente_id'
        })
        Pessoas.hasMany(models.Matriculas, {
            foreignKey: 'estudante_id'
        })

    }
    return Pessoas
}