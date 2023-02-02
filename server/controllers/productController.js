const asyncHandler = require('express-async-handler');

const Product = require('../models/productModel');

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getAllProducsts = asyncHandler(async (_, res) => {
  const products = await Product.find();

  res.status(200).json(products);
});

// @desc    Create new product
// @route   POST /api/products
// @access  Private
const createProduct = asyncHandler(async (req, res) => {
  const { name, description, price, servings, category } = req.body;

  if (!name || !description || !price || !servings || !category) {
    res.status(400);
    throw new Error('Please add all required information');
  }

  const product = await Product.create({
    name,
    description,
    price,
    servings,
    category,
    user: req.user.id,
  });

  res.status(201).json(product);
});

module.exports = { getAllProducsts, createProduct };
