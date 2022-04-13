const Subscribe = require("../models/Subscribe");

const router = require("express").Router();

router.post("/", async (req, res) => {
  console.log(req.body);

  const newSubscribe = new Subscribe(req.body);

  try {
    const savedSubscribe = await newSubscribe.save();
    res.status(200).json(savedSubscribe);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
