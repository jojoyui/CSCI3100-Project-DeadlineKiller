var express = require('express');
var router = express.Router();
const testingControllers = require("../controllers/testingControllers.js");

const usersControllers = require("../controllers/usersControllers.js");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/testing", testingControllers.testingControll);

//
router.post("/register", usersControllers.register);
router.post("/login", usersControllers.login);

module.exports = router;
