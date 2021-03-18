var express = require('express');
var router = express.Router();
const testingControllers = require("../controllers/testingControllers.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getUserInfo',function(req,res,next){
  
  var response = {status:1, data:user}
  res.send(JSON.stringify(response))
})

router.get("/testing", testingControllers.testingControll);

module.exports = router;
