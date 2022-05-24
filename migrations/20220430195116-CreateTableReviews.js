'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     await queryInterface.createTable('reviews', {
     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
     content: DataTypes.TEXT,
     productId: {
       type: Sequelize.INTEGER,
       references: {
         model: 'products',
         key: 'id',
       },
       onDelete: 'CASCADE',
     },
     createdAt: DataTypes.DATE,
     updatedAt: DataTypes.DATE,
   })

  },


   async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

     await queryInterface.dropTable('reviews');
    }
  };