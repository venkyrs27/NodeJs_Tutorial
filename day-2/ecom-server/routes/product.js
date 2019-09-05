const express = require('express');

const router = express.Router();

const products = [];

// get all
router.get('/', (req, res) => {
          res.json(products);
});

// get specific product
router.get('/:id', (req, res) => {
          const id = req.params.id;
          console.log('id:', id);
          const prod = products.find(p => p.id === parseInt(id));
          if (!prod) {
                    return res.status(404).json({ message: 'product not found!' });
          }
          res.json(prod);
});

// create a prod
router.post('/', (req, res) => {
          console.log(req.body);
          // let product = {};
          // Object.assign(product, req.body);
          // product.id = Date.now();
          const product = {
                    //spread operator
                    ...req.body,
                    id: Date.now()
          }
          products.push(product);
          res.status(201).send("Product Created successfully");
});

// update product
router.put('/:id', (req, res) => {
          const id = req.params.id;
          const product = products.find(p => p.id === parseInt(id));
          if (!product) {
                    return res.status(404).json({ message: 'product not found!' });
          }
          // object destructuring
          const { name, desc, price, category } = req.body;
          product.name = name;
          product.desc = desc;
          product.price = price;
          product.category = category;

          res.json(product);
});

// delete product
router.delete('/:id', (req, res) => {
          const id = req.params.id;
          const productIndex = products.findIndex(p => p.id === parseInt(id));
          if (productIndex < 0) {
                    return res.status(404).json({ message: 'product not found!' });
          }
          products.splice(productIndex, 1);
          res.send({ message: `Product with ${productIndex} deleted sucessfully` });
});

module.exports = router;