const express = require("express");
const router = express.Router();
const ordersCotroller = require("../controllers/orders");

router.get("/orders", ordersCotroller.getOrders);

module.exports = router;
