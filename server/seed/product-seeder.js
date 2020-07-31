const Product = require('../models/products.js');
const mongoose = require('mongoose');
require('dotenv').config();
const URI = process.env.MONGODB_URI;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

function seedEvents() {
  const products = [
    {
      name: 'Beginner Board',
      brand: 'Rip Curl',
      photo:
        'https://res.cloudinary.com/fguerreir0/image/upload/v1596147264/E-Commerce%20Example/surfboard_ptbyvi.jpg',
      category: 'Surf',
      subCategory: 'Board',
      price: {
        amount: 12550
      }
    },
    {
      name: 'Intermediate Board',
      brand: 'Rip Curl',
      photo:
        'https://res.cloudinary.com/fguerreir0/image/upload/v1596147264/E-Commerce%20Example/surfboard_ptbyvi.jpg',
      category: 'Surf',
      subCategory: 'Board',
      price: {
        amount: 22500
      }
    },
    {
      name: 'Advance Board',
      brand: 'Rip Curl',
      photo:
        'https://res.cloudinary.com/fguerreir0/image/upload/v1596147264/E-Commerce%20Example/surfboard_ptbyvi.jpg',
      category: 'Surf',
      subCategory: 'Board',
      price: {
        amount: 32500
      }
    },
    {
      name: 'Element Skate',
      brand: 'Element',
      photo:
        'https://res.cloudinary.com/fguerreir0/image/upload/v1596147479/E-Commerce%20Example/1156646_sc086s.jpg',
      category: 'Skate',
      subCategory: 'Skateboards',
      price: {
        amount: 16000
      }
    },
    {
      name: 'Plan B Skate',
      brand: 'Plan B',
      photo:
        'https://res.cloudinary.com/fguerreir0/image/upload/v1596147485/E-Commerce%20Example/1169108_ogwrh4.jpg',
      category: 'Skate',
      subCategory: 'Skateboards',
      price: {
        amount: 11000
      }
    },
    {
      name: 'Advanced Stand-up',
      brand: 'Something',
      photo:
        'https://res.cloudinary.com/fguerreir0/image/upload/v1596147657/E-Commerce%20Example/Naish-Glide-Fusion-12-0-Package-A.85x170_buflsc.jpg',
      category: 'Stand-up',
      subCategory: 'Inflatable sup',
      price: {
        amount: 110400
      }
    }
  ];

  // use the Event model to insert/save
  for (let i = 0; i < products.length; i++) {
    const newProduct = new Product(products[i]);
    newProduct.save();
  }
  // seeded!
  console.log('Database was seeded');
}

seedEvents();
