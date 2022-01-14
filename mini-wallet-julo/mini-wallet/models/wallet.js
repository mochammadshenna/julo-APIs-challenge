'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Wallet.init({
    ownedBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users", key: "id" },
      onUpdate: "cascade",
      onDelete: "cascade",
      validate: {
        notEmpty: { args: true, msg: "Please select User." },
        notNull: { args: true, msg: "Please select User." },
      },
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "Enabled"
    },
    balance: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Wallet',
  });
  return Wallet;
};