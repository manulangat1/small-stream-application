'use strict';

module.exports = function (sequelize, DataTypes) {
  var ShoppingCart = sequelize.define('ShoppingCart', {
    name: DataTypes.STRING
  }, {});

  ShoppingCart.associate = function (models) {
    // associations can be defined here
    ShoppingCart.hasMany(models.OrderItem, {
      foreignKey: 'itemNo'
    });
  };

  return ShoppingCart;
};