const express = require('express');
const morgan = require('morgan');
const log = require('./middleware/log');
const productRoutes = require('./routes/product');
const homeRoute = require('./routes/home');
const userRoute = require('./routes/users');

const app = express();

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

