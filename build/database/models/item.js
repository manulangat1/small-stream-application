'use strict';

module.exports = function (sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    desc: DataTypes.STRING
  }, {});

  Item.associate = function (models) {
    // associations can be defined here
    Item.belongsTo(models.OrderItem, {
      foreignKey: 'orderItemId'
    });
  };

  return Item;
};