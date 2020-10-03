const express = require("express");
require("express-async-errors");
require("colors");
require("dotenv").config();

const connectDB = require("./config/db");
const products = require("./routes/products");

const app = express();

connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", products);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
