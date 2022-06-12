const Product = require("../models/Product.js");

module.exports = async (req, res) => {
  try {
    var product = await Product.findOne({ _id: req.params.id });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }

  res.send(product);
};
