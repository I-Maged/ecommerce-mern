const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  name: {
    type: String,
    required: [true, 'Please add a name for your product'],
    trim: true,
    maxLength: [20, 'Product name cannot exceed 20 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please add a description for your product'],
    maxlength: [4000, 'Description cannot exceed 4000 characters'],
  },
  price: {
    type: Number,
    required: [true, 'Please add a price for your product'],
  },
  servings: {
    type: Number,
    required: [true, 'Please add number of servings'],
  },
  category: {
    type: String,
    required: [true, 'Please add a category for the product'],
    enum: ['Protein', 'Creatine', 'Vitamins', 'Pre-Workout'],
  },
});

module.exports = mongoose.model('Product', productSchema);
