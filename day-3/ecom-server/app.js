const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const log = require('./middleware/log');
const productRoutes = require('./routes/product');
const homeRoute = require('./routes/home');
const userRoute = require('./routes/users');

const app = express();

mongoose.connect('mongodb://localhost:27017/ecom-server', { useNewUrlParser: true })
          .then(() => {
                    console.log('connected to eCom db successfully');
          })
          .catch((err) => {
                    console.log('error while connection to eCom db successfully');
                    console.log('Error: ', err);
          });

app.use(log);
app.use(morgan('tiny'));
app.use(express.json());
//for form data
app.use(express.urlencoded({ extended: false }));

//bridge route handlers with url
app.use('/', homeRoute);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoute);

const port = process.env.PORT || 3000;

app.listen(port, () =>
          console.log(`eCom server started on ${port} `)
);

