const express = require('express');
const router = express.Router();
const path = require('path');
const cm = require('../controllers/products');

// http://localhost:3000/customers/home

router.get('/home', function (req, res, next) {
    const filePath = path.join(__dirname, '../client', 'products-home.html');
    res.sendFile(filePath);
});

router.get('/', cm.productsList);
router.get('/details', cm.viewProductDetails);
router.get('/export', cm.exportProducts);
router.patch('/', cm.updateProduct);
router.post('/', cm.addProduct);
router.delete('/', cm.deleteProduct);

module.exports = router;