const express = require("express");
const Product = require("../models/product");

const router = express.Router();

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public

router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public

router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  res.send(product);
});

module.exports = router;
