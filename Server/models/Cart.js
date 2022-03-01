const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    iserId: { type: String, required: true },
    products: [
      {
        proudctId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
