const express = require("express");
const logger = require("morgan");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user")
const meterRoutes = require("./routes/meter");

require("dotenv").config();
require("./database")

const app = express();
const port = process.env.PORT;

// middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api", authRoutes);
app.use("/api/user", userRoutes)
app.use("/api/meter", meterRoutes);

// server
app.listen(port, () => {
  console.log(`SERVER: Listening on port ${port}`);
});
