const jwt = require('jsonwebtoken');
const config = require('../config/dev');

module.exports = (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    next();
}