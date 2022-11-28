const express = require('express');
const cors = require('cors');
const productsRouter = require('../Server/routers/productsRouter');






const app = express();

require('./config/database');
// Middlewares
app.use(cors());
app.use(express.json());

app.use('/products', productsRouter);

app.listen(8000, () => {
    console.log('Server is listening');
  });