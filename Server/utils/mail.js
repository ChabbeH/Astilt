const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const router = require("express").Router();

const transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transport.verify((error, sucess) => {
  if (error) {
    console.log(error);
  } else {
    console.log("ready for msg");
    console.log(sucess);
  }
});

router.post("/sendmail", (req, res) => {
  const mailOptions = {
    from: "noreply@astilt.se",
    to: "service@astilt.se",
    subject: "from" + req.body.formValues.senderEmail,
    text: req.body.formValues.message,
    html: "",
  };

  transport
    .sendMail(mailOptions)
    .then(() => {
      res.json({
        status: "SUCESS",
        message: "MESSAGE sent successfully",
      });
    })
    .catch((error) => {
      console.log(error);
      res.json({ status: "FAILED", message: "AN ERROR OCCURRED!" });
    });
});

module.exports = router;
