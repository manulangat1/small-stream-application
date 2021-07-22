'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return Promise.all([
     queryInterface.addColumn('Items','categoryId',{
      type: Sequelize.INTEGER,
      onDelete: 'set null',
      allowNull: false,
      references: {
        model: 'Categories',
        key: 'id',
      }
     })
   ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return Promise.all([
     queryInterface.removeColumn('Items','categoryId')
   ])
  }
};
