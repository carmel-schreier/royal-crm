const express = require('express');
const router = express.Router();
const customersModule = require('../controllers/customers');
const productsModule = require('../controllers/products');
const ordersModule = require('../controllers/orders');

router.get('/', function (req, res, next) {
  // res.send('hello again');
  //customersModule.addCustomer('Mr. Green', '+1(021) 145-2256', 'green@blueberry.com', 1);
  //customersModule.addCustomer('Brun Tech', '+2 251 966 522 456', 'info@brun-tech.com', 2);
  //customersModule.addCustomer('Bakala - Grocery Store', '+922 3 7070 111', 'bakala@gmail.com', 3);
  customersModule.customersList(req, res);
});

//router.get('/', function (req, res, next) {
//  // res.send('hello again');
//  productsModule.addProduct('god product', 'A very good product', 'hi@gmail.com', 50);
//  productsModule.productsList(req, res);
//});


//router.get('/', function (req, res, next) {
//  // res.send('hello again');
//  ordersModule.addOrder('2022-05-08 12:31:30', 123, 75, 400.56, 67);
//  ordersModule.ordersList(req, res);
//});

module.exports = router;


//SET DEFULT=royal-crm:* & npm start