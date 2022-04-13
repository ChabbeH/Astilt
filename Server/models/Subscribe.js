const mongoose = require("mongoose");

const SubscribeSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Subscribe", SubscribeSchema);
