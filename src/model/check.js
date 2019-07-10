'use strict';
module.exports = (sequelize, DataTypes) => {
  const Check = sequelize.define('Check', {
    checkIn: DataTypes.DATE,
    checkOut: DataTypes.DATE,
    userId: DataTypes.INTEGER
  }, {});
  Check.associate = function(models) {
    Check.belongsTo(models.User, { foreignKey: 'userId', as: 'user' })
  };
  return Check;
};