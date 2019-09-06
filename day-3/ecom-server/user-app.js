const express = require('express');
const mongoose = require('mongoose');
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

app.use(express.json());

app.use('/api/users', userRoute);

const port = process.env.PORT || 3000;

app.listen(port, () =>
          console.log(`eCom server started on ${port} `)
);