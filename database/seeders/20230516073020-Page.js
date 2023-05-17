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
   await queryInterface.bulkInsert('Pages', [
    {
      title: 'Home',
      slug: 'home',
      body: 'Homepage content',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Contact',
      slug: 'contact',
      body: 'Contact form',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'About',
      slug: 'about',
      body: 'About page',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Links',
      slug: 'links',
      body: 'List of links',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
   ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Pages', null, {});
  }
};
