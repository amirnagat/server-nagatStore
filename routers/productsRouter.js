const express = require('express');
const router = express.Router();

const productsBLL = require('../BLL/productBLL');

// http://localhost:8000/products

//GET
router.get('/', async (req, res) => {
  try {
    const products = await productsBLL.getProducts();
    res.status(200).json(products);
  } catch (e) {
    res.status(500).json(e); // 500 - Internal Server Error
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productsBLL.getById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

//POST
router.post('/', async (req, res) => {
  try {
    const product = req.body;
    const status = await productsBLL.createProduct(product);
    res.status(200).json(status);
  } catch (e) {
    res.status(500).json(e);
  }
});

//PUT
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const status = await productsBLL.updateProduct(id, obj);
    res.status(200).json(status);
  } catch (e) {
    res.status(500).json(e);
  }
});

//DELETE
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const status = await productsBLL.deleteProduct(id);
    res.status(200).json(status);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;