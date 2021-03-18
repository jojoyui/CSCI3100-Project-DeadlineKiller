var express = require('express');
var router = express.Router();
var seed = require('../seeds/task');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
