'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        notNull: true,
        unique: true,
        notEmpty: true
      },
      password: {
        type: Sequelize.STRING,
        notNull: true,
        notEmpty: true
      },
      role: {
        type: Sequelize.ENUM,
        values: [
          'admin',
          'user'
        ],
        defaultValue: 'user'
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
      archived: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
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
    return queryInterface.dropTable('Users');
  }
};