'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Wallet, { foreignKey: 'ownedBy' });
      User.hasMany(models.Deposit, { foreignKey: 'depositedBy' });
      User.hasMany(models.Withdrawal, { foreignKey: 'withdrawBy' });
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: 'Email are required' },
        notEmpty: { msg: 'Email are required' },
        isEmail: { msg: 'Please enter a valid email address' },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Password are required' },
        notEmpty: { msg: 'Password are required' },
        min: {
          args: 5,
          msg: 'Password must be at least 5 character',
        },
      },
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (instance) => {
        instance.password = encrypt(instance.password);
      },
    },
  });
  return User;
};