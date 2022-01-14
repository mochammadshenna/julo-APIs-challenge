"use strict";

const { hashPassword } = require("../helpers/bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let userData = [
      {
        username: "admin",
        email: "admin@mail.com",
        password: hashPassword("admin"),
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "staff",
        email: "staff@mail.com",
        password: hashPassword("staff"),
        role: "staff",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("Users", userData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
