'use strict';

const { Router } = require('express');
const Products = require('./../models/products');
const router = new Router();

router.get('/all', (req, res, next) => {
  Products.find()
    .sort({ price: 1 })
    .then((list) => {
      res.json({
        products: list
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post('/category', (req, res, next) => {
  const { category, subCategory } = req.body;
  Products.find({ category, subCategory })
    .sort({ price: 1 })
    .then((list) => {
      res.json({
        products: list
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
