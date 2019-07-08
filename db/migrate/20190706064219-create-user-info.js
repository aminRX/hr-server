'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        notNull: true,
      },
      lastName: {
        type: Sequelize.STRING,
        notNull: true,
      },
      direction: {
        type: Sequelize.STRING,
        notNull: true,

      },
      birthday: {
        type: Sequelize.DATE,
        notNull: true,
      },
      gender: {
        type: Sequelize.ENUM,
        values: [
          'M',
          'F'
        ],
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserInfos');
  }
};