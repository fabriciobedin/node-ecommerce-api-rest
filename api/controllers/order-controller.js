const Order = require("../models/order");
const Product = require("../models/product");

exports.index = (req, res, next) => {
  Order.find()
    .select("_id product quantity")
    .populate("product", "name price")
    .exec()
    .then(result => {
      res.status(200).json({
        count: result.length,
        orders: result
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

exports.create = (req, res, next) => {
  Product.findById(req.body.productId)
    .then(product => {
      const order = new Order({
        quantity: req.body.quantity,
        product: product._id
      });
      order
        .save()
        .then(result => {
          res.status(201).json({
            message: "Order saved",
            savedOrder: {
              _id: result._id,
              product: result.product,
              quantity: result.quantity
            }
          });
        })
        .catch(err => {
          res.status(500).json({
            error: err
          });
        });
    })
    .catch(err => {
      res.status(500).json({
        message: "Product not found",
        error: err
      });
    });
};

exports.show = (req, res, next) => {
  Order.findById(req.params.orderId)
    .populate("product")
    .exec()
    .then(result => {
      if (!result)
        return res.status(404).json({
          message: "Order not found"
        });
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

exports.delete = (req, res, next) => {
  Order.remove({ _id: req.params.orderId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Order removed"
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};
