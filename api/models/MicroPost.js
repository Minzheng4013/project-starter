"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class MicroPost extends Model {}

  MicroPost.init(
    {
      content: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 250],
          notEmpty: true,
        },
      },
      likes_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "MicroPost",
    }
  );

  MicroPost.associate = (models) => {
    // associations can be defined here
    MicroPost.hasMany(models.Comment, {
      foreignKey: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
  };

  return MicroPost;
};
