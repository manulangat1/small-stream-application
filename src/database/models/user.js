'use strict';
module.exports = (sequelize, DataTypes) => 
{
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    nationality: DataTypes.STRING,
    tagline: DataTypes.STRING,
    company: DataTypes.STRING,
    city: DataTypes.STRING,
    token: DataTypes.STRING,
    status: DataTypes.INTEGER,
    image: DataTypes.STRING,
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Subscriptions,{
      foreignKey:'userId'
    })
    User.hasMany(models.OrderItem,{
      foreignKey:'userId'
    })
  };
  return User;
};