const express = require('express');

const router = express.Router();

const Product = require('../models/product');

const products = [];

// get all
router.get('/', async (req, res) => {
          // res.json(products);
          try {
                    const products = await Product.find().select('-__v');
                    res.json(products);
          } catch (err) {
                    console.log("Error: ", err);
                    res.status(500).json({ message: err.message });
          }

          // Product.find().select('-__v')
          //           .then(products => {
          //                     console.log("Products: ", products);
          //                     res.json(products);
          //           }).catch(err => {
          //                     console.log("Error: ", err);
          //                     res.status(500).json({ message: err.message });
          //           });

          // to select particular columns 
          // '-' if you dont want

          // Product.find().select({name,desc})
          // .then(product => {
          //           console.log("Product: ", product);
          //           res.json(product);
          // }).catch(err => {
          //           console.log("Error: ", err);
          //           res.status(500).json({ message: err.message });
          // });
});

// get specific product
router.get('/:id', async (req, res) => {
          // const id = req.params.id;
          // console.log('id:', id);
          // const prod = products.find(p => p.id === parseInt(id));
          // if (!prod) {
          //           return res.status(404).json({ message: 'product not found!' });
          // }
          // res.json(prod);
          try {
                    // Product.findOne({_id : req.params.id}) will also work
                    const product = await Product.findById(req.params.id).select('-__v');
                    res.send(product);
          } catch (err) {
                    console.log("Error: ", err);
                    res.status(500).json({ message: err.message });
          }

});

// create a prod
router.post('/', async (req, res) => {
          console.log(req.body);
          // let product = {};
          // Object.assign(product, req.body);
          // product.id = Date.now();
          // const product = {
          //           //spread operator
          //           ...req.body,
          //           id: Date.now()
          // }
          // products.push(product);

          // Product.create(req.body).then(product => {
          //           res.status(201).send(product);
          // }).catch(err => {
          //           console.log('Error: ', err);
          //           res.status(500).json({ message: err.message });
          // });

          const product = new Product({
                    ...req.body
          });
          try {
                    await product.save();
                    res.status(201).send(product);
          } catch (err) {
                    console.log('Error: ', err);
                    res.status(500).json({ message: err.message });
          };
});

// update product
router.put('/:id', async (req, res) => {
          const id = req.params.id;
          // const product = products.find(p => p.id === parseInt(id));
          // if (!product) {
          //           return res.status(404).json({ message: 'product not found!' });
          // }
          // // object destructuring
          // const { name, desc, price, category } = req.body;
          // product.name = name;
          // product.desc = desc;
          // product.price = price;
          // product.category = category;

          // res.json(product);

          try {
                    // Product.findOne({_id : req.params.id}) will also work
                    // const updatedProduct = {
                    //           ...req.body
                    // }
                    const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
                    res.send(product);
                    if (!product) {
                              return res.status(404).json({ message: 'product not found!' });
                    }
          } catch (err) {
                    console.log("Error: ", err);
                    res.status(500).json({ message: err.message });
          }


});

// delete product
router.delete('/:id', async (req, res) => {
          const id = req.params.id;
          // const productIndex = products.findIndex(p => p.id === parseInt(id));
          // if (productIndex < 0) {
          //           return res.status(404).json({ message: 'product not found!' });
          // }
          // products.splice(productIndex, 1);

          try {
                    const product = await Product.findByIdAndDelete(id);
                    if (!product) {
                              return res.status(404).json({ message: 'Product not found!' });
                    }
                    res.send(product);
          } catch (err) {
                    console.log("Error: ", err);
                    res.status(500).json({ message: err.message });
          }

          res.send({ message: `Product with ${productIndex} deleted sucessfully` });
});

module.exports = router;