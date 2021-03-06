const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const mailRoute = require("./utils/mail");
const stripeRoute = require("./routes/stripe");
const subscribeRoute = require("./routes/subscribe");
const cors = require("cors");
const bodyParser = require("express").json;

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use(bodyParser());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/mail", mailRoute);
app.use("/api/checkout", stripeRoute);
app.use("/api/subscribe", subscribeRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
