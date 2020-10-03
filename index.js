const express = require("express");
require("express-async-errors");
require("colors");
require("dotenv").config();

const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middlewares/error.js");
const products = require("./routes/products");

const app = express();

connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", products);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
