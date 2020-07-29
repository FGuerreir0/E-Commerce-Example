const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String },
  photo: { type: String },
  category: { type: String },
  price: {
    amount: { type: Number },
    currency: {
      type: String,
      default: '€'
    }
  }
});

const Model = mongoose.model('Product', schema);

module.exports = Model;
