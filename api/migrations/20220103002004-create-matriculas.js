'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Matriculas', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            status: {
                type: Sequelize.STRING
            },
            estudante_Id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: 'Niveis', key: 'id' }
            },
            turma_Id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: 'Turmas', key: 'id' }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Matriculas');
    }
};