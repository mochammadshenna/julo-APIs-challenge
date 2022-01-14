'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let depositData = [
      { amount: 6000, createdAt: new Date(), updatedAt: new Date() },
    ];
    await queryInterface.bulkInsert("Deposits", depositData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Deposits", null, {});
  }
};
