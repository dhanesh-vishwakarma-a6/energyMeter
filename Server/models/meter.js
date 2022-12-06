const { Sequelize, DataTypes } = require("sequelize")

const sequelize = new Sequelize("mysql::memory:");
const Meter = sequelize.define(
  "Meter",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      validate: {
        notEmpty: true,
        notNull: true,
      }
    },
    serialNumber: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        notNull: true,
      }
    },
    utilityType: {
      type: DataTypes.ENUM,
      values: [
        "electric",
        "water",
        "gas"
      ],
      validate: {
        notEmpty: true,
        notNull: true,
      }
    },
    longitude: {
      type: DataTypes.DECIMAL,
      validate: {
        notEmpty: true,
        notNull: true,
      }
    },
    latitude: {
      type: DataTypes.DECIMAL,
      validate: {
        notEmpty: true,
        notNull: true,
      }
    },
    readings: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      defaultValue: [],
      validate: {
        notEmpty: true,
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt", I
  }
);

module.exports = Meter
