const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth"); // Make sure to destructure `auth`
const { capturePayment, sendPaymentSuccessEmail } = require("../controllers/payments");

router.post("/capturePayment", auth, capturePayment); // Use `auth` middleware
router.post("/sendPaymentSuccessEmail", auth, sendPaymentSuccessEmail); // Use `auth` middleware

module.exports = router;
