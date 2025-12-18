const express = require('express');
const productsRoutes = require('./routes/products');
const categoriesRoutes = require('./routes/categories');

const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});

app.use('/products', productsRoutes);
app.use('/categories', categoriesRoutes);

app.listen(4000);
