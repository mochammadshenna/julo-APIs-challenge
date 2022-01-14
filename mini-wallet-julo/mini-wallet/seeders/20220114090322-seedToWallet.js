'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let walletData = [
      { balance: 0, createdAt: new Date(), updatedAt: new Date() },
    ];
    await queryInterface.bulkInsert("Wallets", walletData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Wallets", null, {});
  }
};
