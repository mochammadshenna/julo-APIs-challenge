'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Deposit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Deposit.belongsTo(models.User, { foreignKey: 'depositedBy' });
    }
  };
  Deposit.init({
    depositedBy: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Enabled',
    },
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Deposit',
  });
  return Deposit;
};