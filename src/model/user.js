'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      isEmail: true,
      allowNull: false,
      notEmpty: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true
    },
    archived: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  }, {});

  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  User.associate = function(models) {
    // associations can be defined here
  };

  User.beforeCreate((user, options) => {
    return bcrypt.hash(user.password, 10).then(hash => {
      user.password = hash;
    }).catch(err => {
      throw new Error();
    });
  });

  return User;
};