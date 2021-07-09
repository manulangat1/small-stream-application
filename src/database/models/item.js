'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    desc: DataTypes.STRING,
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
    Item.belongsTo(models.OrderItem,{
      foreignKey:'orderItemId'
    })
    Item.belongsTo(models.Category,{
      foreignKey:'categoryId'
    })
  };
  return Item;
};