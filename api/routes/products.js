const express = require("express");
const router = express.Router();

const checkAuth = require("../middleware/check-auth");
const ProductController = require("../controllers/product-controller");
const saveImage = require("../middleware/save-image");

router.get("/", ProductController.index);
router.post(
  "/",
  checkAuth,
  saveImage.single("productImage"),
  ProductController.create
);
router.get("/:productId", ProductController.show);
router.patch("/:productId", checkAuth, ProductController.edit);
router.delete("/:productId", checkAuth, ProductController.delete);

module.exports = router;
