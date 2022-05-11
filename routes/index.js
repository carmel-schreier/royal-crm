const express = require('express');
const router = express.Router();
const customersModule = require('../controllers/customers');
const productsModule = require('../controllers/products');
const ordersModule = require('../controllers/orders');



router.get('/customers', customersModule.customersList);

router.get('/products', productsModule.productsList);

router.get('/orders', ordersModule.ordersList);


//{
//customersModule.addCustomer('Mr. Green', '+1(021) 145-2256', 'green@blueberry.com', 1);
//customersModule.addCustomer('Brun Tech', '+2 251 966 522 456', 'info@brun-tech.com', 2);
//customersModule.addCustomer('Bakala - Grocery Store', '+922 3 7070 111', 'bakala@gmail.com', 3);
//customersModule.customersList(req, res);
//});



//{
//  productsModule.addProduct('god product', 'A very good product', 50.67);
//  productsModule.productsList(req, res);
//});


//{
//  ordersModule.addOrder(123, 75, 400.56, 67);
//  ordersModule.ordersList(req, res);
//});

module.exports = router;


//SET DEBUG=royal-crm:* & npm start