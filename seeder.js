const mongoose = require("mongoose");
require("colors");
require("dotenv").config();

const connectDB = require("./config/db");

const products = require("./data/products");
const users = require("./data/users");

const User = require("./models/user");
const Product = require("./models/product");
const Order = require("./models/order");

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

importData();
