'use strict';

module.exports = (sequelize, DataTypes) => {
  const UserInfo = sequelize.define('UserInfo', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true
    },
    direction: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    gender: DataTypes.ENUM({
      values: ['M', 'F']
    }),
    userId: DataTypes.INTEGER

  }, {});
  UserInfo.associate = function(models) {
    UserInfo.belongsTo(models.User);
  };
  return UserInfo;
};