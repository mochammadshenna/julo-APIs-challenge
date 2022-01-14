'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let withdrawData = [
      { amount: 6000, createdAt: new Date(), updatedAt: new Date() },
    ];
    await queryInterface.bulkInsert("Withdrawals", withdrawData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Withdrawals", null, {});
  }
};
