const Product = require("../models/Product");

module.exports = (req, res) => {
  Product.create(req.body, async (err, product) => {
    if (err) {
      res.send("Error: " + err);
    } else {
      res.status(200).send(product);
    }
  });
};
