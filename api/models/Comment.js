"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {}

  Comment.init(
    {
      comment_content: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 250],
          notEmpty: true,
        },
      }
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );

  Comment.associate = (models) => {
    // associations can be defined here
    Comment.belongsTo(models.MicroPost, {
      foreignKey: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  };

  return Comment;
};