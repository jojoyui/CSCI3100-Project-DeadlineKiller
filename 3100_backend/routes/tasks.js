var express = require('express');
var router = express.Router();
const tasksControllers = require("../controllers/tasksControllers.js");


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/getTasks/:user", tasksControllers.getTasks);
router.get("/countTask/:user", tasksControllers.countTask);
router.get("/countTask2/:user", tasksControllers.countTask2);


module.exports = router;
