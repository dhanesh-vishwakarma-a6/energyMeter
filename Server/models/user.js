const { Sequelize, DataTypes } = require("sequelize")

const sequelize = new Sequelize("mysql::memory:");
const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      validate: {
        notEmpty: true,
        notNull: true,
      }
    },
    firstName: {
      type: DataTypes.STRING,
      validate: {
        len: [2, 10],
        isAlpha: true,
        notEmpty: true,
        notNull: true,
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        len: [2, 10],
        isAlpha: true,
        notEmpty: true,
        notNull: true,
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
        notEmpty: true,
        notNull: true,
      }
    },
    hash_password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        notNull: true,
      }
    },
    salt: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        notNull: true,
      }
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      validate: {
        notEmpty: true,
        notNull: true,
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  }
);

module.exports = User