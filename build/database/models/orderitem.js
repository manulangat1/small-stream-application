'use strict';

module.exports = function (sequelize, DataTypes) {
  var OrderItem = sequelize.define('OrderItem', {
    isPaid: DataTypes.BOOLEAN
  }, {});

  OrderItem.associate = function (models) {
    // associations can be defined here
    OrderItem.belongsTo(models.User, {
      foreignKey: 'userId'
    });
    OrderItem.hasMany(models.Item, {
      foreignKey: 'orderItemId'
    });
    OrderItem.belongsTo(models.ShoppingCart, {
      foreignKey: 'itemNo'
    });
  };

  return OrderItem;
};