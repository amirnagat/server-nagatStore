const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    frontimg : String,
    backimg : String,
    category: String,
    desc: String,
    price: Number,
  },
  { versionKey: false }
);

const model = mongoose.model('product', ProductSchema);

module.exports = model;