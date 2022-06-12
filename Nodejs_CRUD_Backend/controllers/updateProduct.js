const Product = require("../models/Product");

module.exports = async (req, res) => {
  const filter = { _id: req.body.id };
  let doc = await Product.findOneAndUpdate(filter, req.body);
  res.status(200).send(doc);
};