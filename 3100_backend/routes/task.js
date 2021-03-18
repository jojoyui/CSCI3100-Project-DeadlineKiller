var express = require('express');
var router = express.Router();
const tasksControllers = require("../controllers/tasksControllers.js");


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/getTasks/:user", tasksControllers.getTasks);

router.post("/createTask", tasksControllers.createTask);
router.post("/createGroup", tasksControllers.createGroup);


module.exports = router;