"use strict";

module.exports = (sequelize, DataTypes) => {
  const meals = sequelize.define('meals', {
    name: {
      type: DataTypes.STRING
    }
  });
  // users.associate = models => users.hasOne(models.loans,{foreignKey: "book_id"})
  return meals;
}