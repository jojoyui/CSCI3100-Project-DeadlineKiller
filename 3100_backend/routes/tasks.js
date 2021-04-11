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
<<<<<<< HEAD
=======
router.post("/createSubtask", tasksControllers.createSubtask);
router.get("/updategroup/:task:user:subid", tasksControllers.Updategroup);
>>>>>>> 2bac24416bc1d80eff6c551cac310d955cf6a7a9
router.get("/CountCompletedTask/:user/:start/:end", tasksControllers.CountCompletedTask);
router.get("/CountIncompletedTask/:user/:start/:end", tasksControllers.CountIncompletedTask);
router.get("/CountTotalTask/:user", tasksControllers.CountTotalTask);
router.get("/CountDueTask/:user", tasksControllers.CountDueTask);
<<<<<<< HEAD
router.post("/createSubtask", tasksControllers.createSubtask);
router.get("/updategroup/:task:user:subid", tasksControllers.Updategroup);
=======

router.post("/completeTask", tasksControllers.completeTask);

>>>>>>> 2bac24416bc1d80eff6c551cac310d955cf6a7a9


module.exports = router;