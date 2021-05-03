'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Damla",
          lastName: "Demir",
          email: "dmldemirr@gmail.com",
          username: "damlademir",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Burak Çağrı",
          lastName: "Duba",
          email: "burakcagriduba@gmail.com",
          username: "burakcagri",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
