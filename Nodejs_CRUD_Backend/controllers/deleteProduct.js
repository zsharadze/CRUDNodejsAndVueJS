const Product = require("../models/Product");

module.exports = (req, res) => {
  Product.findByIdAndRemove(req.body.id, function (err, doc) {
    res.status(200).send();
  });
};
