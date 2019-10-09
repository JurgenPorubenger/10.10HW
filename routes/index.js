const express = require('express');
const router = express.Router();
let carList = [{name: 'jala', price: 'baba'},{name: 'jala', price: 'baba'},{name: 'jala', price: 'baba'}];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { carArr: carList});
});


module.exports = router;
