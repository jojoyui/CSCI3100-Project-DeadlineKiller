var express = require('express');
var router = express.Router();
var seed = require('../seeds/task');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/index/save', function(req, res, next) {
  // seed()
  console.log('zhixing----');
})

module.exports = router;
