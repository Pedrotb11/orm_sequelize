'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Turmas extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Turmas.hasMany(models.Matriculas, {
                    foreignKey: 'turma_Id'
                }) //chegando na tabela sem o foreignKey, o ORM automaticamente vai criar um campo TurmaId mas vamos sempre passar o nome que queremos
            Turmas.belongsTo(models.Pessoas)
            Turmas.belongsTo(models.Niveis)
        }
    };
    Turmas.init({
        data_inicio: DataTypes.DATEONLY
    }, {
        sequelize,
        modelName: 'Turmas',
    });
    return Turmas;
};