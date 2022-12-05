const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PWD, {
  host: "localhost",
  dialect: "mysql"
});

async function database() {
  try {
    await sequelize.authenticate();
    console.log("DATABASE: Connection has been established successfully.");
  } catch (error) {
    console.error("DATABASE: Unable to connect to the database:", error);
  }
}

database();
