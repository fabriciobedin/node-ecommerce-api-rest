const Product = require("../models/product");

exports.index = (req, res, next) => {
  Product.find()
    .select("_id name price productImage")
    .exec()
    .then(result => {
      res.status(200).json({
        count: result.length,
        products: result,
        productImage: result.productImage
      });
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
};

exports.create = (req, res, next) => {
  console.log(req.file);

  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    productImage: req.file.patch
  });
  product
    .save()
    .then(result => {
      res.status(201).json({
        message: "Handling POST requests to /products",
        createdProduct: result
      });
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
};

exports.show = (req, res, next) => {
  const id = req.params.productId;
  Product.findById(id)
    .exec()
    .then(result => {
      if (result) res.status(200).json(result);
      else
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
};

exports.edit = (req, res, next) => {
  const id = req.params.productId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Product.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
};

exports.delete = (req, res, next) => {
  const id = req.params.productId;
  Product.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
};
