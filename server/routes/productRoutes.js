const express = require('express');
const router = express.Router();

const { protect } = require('../middleware/authMiddleware');

const {
  getAllProducsts,
  createProduct,
} = require('../controllers/productController');

router.route('/').get(getAllProducsts).post(protect, createProduct);

module.exports = router;
