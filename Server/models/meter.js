import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");
const Meter = sequelize.define(
  "Meter",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    serialNumber: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    utilityType: {
      type: DataTypes.ENUM
    },
    lon: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    lat: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
  },
  {
    sequelize,
    modelName: "Meter"
  }
);

module.exports = Meter
