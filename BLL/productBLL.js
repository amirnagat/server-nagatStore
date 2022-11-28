const Product = require('../models/productModel');

const getProducts = async () => {
  try {
    return Product.find({});
  } catch (error) {
    throw `Error: ${error}`;
  }
};

const getById = async (id) => {
  try {
    return Product.findById(id);
  } catch (error) {
    throw `Error: ${error}`;
  }
};

const createProduct = async (obj) => {
  try {
    const product = new Product(obj);
    await product.save(); // saves obj to data base
    return 'Created';
  } catch (error) {
    throw `Error: ${error}`;
  }
};

const updateProduct = async (id, obj) => {
  try {
    await Product.findByIdAndUpdate(id, obj);
    return 'Updated';
  } catch (error) {
    throw `Error: ${error}`;
  }
};

const deleteProduct = async (id) => {
  try {
    await Product.findByIdAndDelete(id);
    return 'Deleted';
  } catch (error) {
    throw `Error: ${error}`;
  }
};

module.exports = {
  getProducts,
  getById,
  createProduct,
  updateProduct,
  deleteProduct,
};