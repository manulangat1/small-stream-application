'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subscriptions = sequelize.define('Subscriptions', {
    plan: DataTypes.STRING,
    planId: DataTypes.STRING,
    isActive:DataTypes.BOOLEAN,
    endDate: DataTypes.DATE
  }, {});
  Subscriptions.associate = function(models) {
    // associations can be defined here
    Subscriptions.belongsTo(models.User,{
      foreignKey:'userId'
    })
  };
  return Subscriptions;
};