var express = require('express');
var router = express.Router();
const testingControllers = require("../controllers/testingControllers.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/testing", testingControllers.testingControll);

module.exports = router;
