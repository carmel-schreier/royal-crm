const express = require('express');
const router = express.Router();
const customersModule = require('../controllers/customers');
const productsModule = require('../controllers/products');
const ordersModule = require('../controllers/orders');

//router.get('/', function (req, res, next) {
//customersModule.addCustomer('Mr. Green', '+1(021) 145-2256', 'green@blueberry.com', 1);
//customersModule.addCustomer('Brun Tech', '+2 251 966 522 456', 'info@brun-tech.com', 2);
//customersModule.addCustomer('Bakala - Grocery Store', '+922 3 7070 111', 'bakala@gmail.com', 3);
//customersModule.customersList(req, res);
//});


//router.get('/', function (req, res, next) {
//  productsModule.addProduct('god product', 'A very good product', 50.67);
//  productsModule.productsList(req, res);
//});

<<<<<<< HEAD
router.get('/', function (req, res, next) {
  ordersModule.addOrder(123, 75, 400.56, 67);
  ordersModule.ordersList(req, res);
});
=======

//router.get('/', function (req, res, next) {
//  // res.send('hello again');
//  ordersModule.addOrder(123, 75, 400.56, 67);
//  ordersModule.ordersList(req, res);
//});
>>>>>>> 2ab0831680e2510a36b152b9510fdff9b1845476

module.exports = router;


<<<<<<< HEAD
//SET DEBUG=royal-crm:* & npm start
=======
//SET DEBUG=royal-crm:* & npm start
>>>>>>> 2ab0831680e2510a36b152b9510fdff9b1845476
