const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    text: { type: String, required: true },
    price: { type: String, required: true },
    condition: { type: String },
    size: { type: Array, required: true },
    desc: { type: String, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
