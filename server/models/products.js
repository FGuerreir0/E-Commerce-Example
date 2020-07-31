const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  photo: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  price: {
    amount: { type: Number, required: true },
    currency: {
      type: String,
      required: true,
      default: '€'
    }
  }
});

const Model = mongoose.model('Product', schema);

module.exports = Model;
