const Product = require('../Models/Product');

exports.addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.send({ message: 'Product added' });
  } catch (err) {
    res.status(400).send({ message: 'Error adding product', error: err });
  }
};

exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.send(products);
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.send({ message: 'Product deleted' });
  } catch (err) {
    res.status(400).send({ message: 'Error deleting product', error: err });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.send({ message: 'Product updated' });
  } catch (err) {
    res.status(400).send({ message: 'Error updating product', error: err });
  }
};
