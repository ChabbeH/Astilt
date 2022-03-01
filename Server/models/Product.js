const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    text: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    condition: { typ: String },
    size: { type: Array, required: true },
    desc: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
