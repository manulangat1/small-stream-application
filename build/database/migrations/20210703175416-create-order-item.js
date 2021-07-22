'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('OrderItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderItemId: {
        type: Sequelize.INTEGER,
        onDelete: 'set null',
        allowNull: false,
        references: {
          model: 'Items',
          key: 'id'
        }
      },
      isPaid: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('OrderItems');
  }
};