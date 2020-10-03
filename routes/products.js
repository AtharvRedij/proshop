const express = require("express");
const Product = require("../models/product");

const router = express.Router();

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public

router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public

router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) return res.status(404).json({ message: "Product not found" });

  res.json(product);
});

module.exports = router;
