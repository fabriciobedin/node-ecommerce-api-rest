const express = require("express");
const router = express.Router();

const checkAuth = require("../middleware/check-auth");
const OrdersController = require("../controllers/order-controller");

router.get("/", checkAuth, OrdersController.index);
router.post("/", checkAuth, OrdersController.create);
router.get("/:orderId", checkAuth, OrdersController.show);
router.delete("/:orderId", checkAuth, OrdersController.delete);

module.exports = router;
