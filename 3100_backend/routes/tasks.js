var express = require('express');
var router = express.Router();
const tasksControllers = require("../controllers/tasksControllers.js");


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/getTasks/:user", tasksControllers.getTasks);
router.get("/getTasksId/:user", tasksControllers.getTasksId);
//router.get("/report/:user", tasksControllers.Report);

router.post("/createTask", tasksControllers.createTask);
router.post("/createGroup", tasksControllers.createGroup);
router.get("/countTask/:user", tasksControllers.countTask);
router.get("/countTask2/:user", tasksControllers.countTask2);
router.post("/createSubtask", tasksControllers.createSubtask);
router.get("/updategroup/:task:user:subid", tasksControllers.Updategroup);


module.exports = router;