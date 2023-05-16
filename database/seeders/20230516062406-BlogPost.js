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
   await queryInterface.bulkInsert(
    'BlogPosts',
    [
      {
        title: 'Post Uno',
        date: new Date(),
        body: 'Hello world',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Post Duo',
        date: new Date(),
        body: 'Hello world again',
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        title: 'Post Trio',
        date: new Date(),
        body: 'Hello world once more',
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
    ],
    {}
   );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('BlogPosts', null, {});
  }
};
