var express = require('express');
var router = express.Router();
const tasksControllers = require("../controllers/tasksControllers.js");


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/getTasks/:user", tasksControllers.getTasks);
router.get("/getTasksId/:user", tasksControllers.getTasksId);
router.get("/completeTask/:tid", tasksControllers.completeTask);
router.post("/createTask", tasksControllers.createTask);
router.post("/createGroup", tasksControllers.createGroup);

router.post("/createSubtask", tasksControllers.createSubtask);
router.get("/updategroup/:task/:user/:subid", tasksControllers.Updategroup);
router.get("/getSubTasks/:tid", tasksControllers.getSubTasks);
router.get("/completeSubTask/:sid", tasksControllers.completeSubTask);
router.get("/CountCompletedTask/:user/:start/:end", tasksControllers.CountCompletedTask);
router.get("/CompletedTask/:user/:start/:end", tasksControllers.CompletedTask);
router.get("/CountIncompletedTask/:user/:start/:end", tasksControllers.CountIncompletedTask);
router.get("/IncompletedTask/:user/:start/:end", tasksControllers.IncompletedTask);
router.get("/CountDueTask/:user", tasksControllers.CountDueTask);
router.get("/OverduedTask/:user", tasksControllers.OverduedTask);




module.exports = router;