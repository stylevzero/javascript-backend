'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('tasks', [
      {id: 1, descripcion: "Modificar archivo de backend", createdAt: new Date(), updatedAt: new Date()},
      {id: 2, descripcion: "actualizar archivo de backend", createdAt: new Date(), updatedAt: new Date()},
      {id: 3, descripcion: "Commitear cambios del backend", createdAt: new Date(), updatedAt: new Date()}
    ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     * 
     */
    await queryInterface.bulkDelete('tasks', null, {});
  }
};
