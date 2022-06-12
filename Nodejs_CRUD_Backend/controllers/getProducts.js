const Product = require("../models/Product.js");

module.exports = async (req, res) => {
  Product.find({}, async function (err, products) {
    return res.json(products);
  });
};