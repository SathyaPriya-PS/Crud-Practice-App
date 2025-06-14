const express = require('express');
const router = express.Router();
const productController = require('../Controllers/productController');

router.post('/products', productController.addProduct);
router.get('/get-products', productController.getProducts);
router.delete('/delete/:id', productController.deleteProduct);
router.put('/edit-product/:id', productController.updateProduct);

module.exports = router;
