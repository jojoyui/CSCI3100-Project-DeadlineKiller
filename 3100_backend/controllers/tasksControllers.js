const { standardServiceResponse } = require("../utils/ResponseHandler");
//const passport = require("passport"); //for authen

const usersServices = require("../services/usersServices.js");
const tasksServices = require("../services/tasksServices");

module.exports = {
    getTasks : async function (req, res, next){
        try{
            console.log("task controller");
            const user = req.params.user;
            return standardServiceResponse(
                res,
                next,
                tasksServices.getTasks(user)
            );
        } catch(err){
            console.log(
                "Error: tasksController.getTask: " +
                  JSON.parse(err.message)["message"]
              );
              next(err);
        }
    },
    getTasksId : async function (req, res, next){
        try{
            console.log("task controller");
            const user = req.params.user;
            return standardServiceResponse(
                res,
                next,
                tasksServices.getTasksId(user)
            );
        } catch(err){
            console.log(
                "Error: tasksController.getTaskId: " +
                  JSON.parse(err.message)["message"]
              );
              next(err);
        }
    },
    createTask : async function (req, res, next){
        try{
            console.log("task controller");
            const task = req.body;
            return standardServiceResponse(
                res,
                next,
                tasksServices.createTask(task)
            );
        } catch(err){
            console.log(
                "Error: tasksController.getTask: " +
                    JSON.parse(err.message)["message"]
                );
                next(err);
          }
      },
    createSubtask : async function (req, res, next){
        try{
            console.log("task controller");
            const task = req.body;
            return standardServiceResponse(
                res,
                next,
                tasksServices.createSubTask(task)
            );
        } catch(err){
            console.log(
                "Error: tasksController.createSubTask: " +
                    JSON.parse(err.message)["message"]
                );
                next(err);
          }
    },
    getSubTasks : async function (req, res, next){
        try{
            console.log("task controller: getSubTask");
            const tid = req.params.tid;
            return standardServiceResponse(
                res,
                next,
                tasksServices.getSubTasks(tid)
            );
        } catch(err){
            console.log(
                "Error: tasksController.getSubTask: " +
                  JSON.parse(err.message)["message"]
              );
              next(err);
        }
    },
    completeSubTask : async function (req, res, next){
        try{
            console.log("task controller: completeSubTask");
            const sid = req.params.sid;
            return standardServiceResponse(
                res,
                next,
                tasksServices.completeSubTask(sid)
            );
        } catch(err){
            console.log(
                "Error: tasksController.completeSubTask: " +
                    JSON.parse(err.message)["message"]
                );
                next(err);
          }
    },
    completeTask : async function (req, res, next){
        try{
            console.log("task controller: completeTask");
            const task = req.params.tid;
            return standardServiceResponse(
                res,
                next,
                tasksServices.completeTask(task)
            );
        } catch(err){
            console.log(
                "Error: tasksController.completeTask: " +
                    JSON.parse(err.message)["message"]
                );
                next(err);
          }
    },
    updateTask : async function (req, res, next){
        try{
            console.log("task controller: updateTask");
            const task = req.params.tid;
            const date = req.params.date;
            return standardServiceResponse(
                res,
                next,
                tasksServices.updateTask(task, date)
            );
        } catch(err){
            console.log(
                "Error: tasksController.updateTask: " +
                    JSON.parse(err.message)["message"]
                );
                next(err);
          }
    },
    updateTaskInfo : async function (req, res, next){
        try{
            console.log("task controller: updateTaskInfo");
            const task = req.params.tid;
            const name = req.params.name;
            const date = req.params.date;
            const details = req.params.details;
            return standardServiceResponse(
                res,
                next,
                tasksServices.updateTaskInfo(task, name, date, details)
            );
        } catch(err){
            console.log(
                "Error: tasksController.updateTaskInfo: " +
                    JSON.parse(err.message)["message"]
                );
                next(err);
          }
    },
    Updategroup: async function(req,res,next){
        try{
            console.log("Updategroup controller");
            const task = req.params.task;
            const user = req.params.user;
            const subid = req.params.subid;
            return standardServiceResponse(
                res,
                next,
                tasksServices.Updategroup(task, user,subid)
            );
        } catch(err){
            console.log(
                "Error: tasksController.Updategroup: " +
                  JSON.parse(err.message)["message"]
              );
              next(err);
        }
    },
    createGroup: async function (req, res, next){
        try{
            console.log("task controller");
            const group = req.body;
            return standardServiceResponse(
                res,
                next,
                tasksServices.createGroup(group)
            );
        } catch(err){
            console.log(
                "Error: tasksController.create group: " +
                  JSON.parse(err.message)["message"]
              );
              next(err);
        }
    },

    CountCompletedTask : async function (req, res, next){
        try{
            console.log("task controller");
            const user = req.params.user;
            const start = req.params.start;
            const end = req.params.end;
            return standardServiceResponse(
                res,
                next,
                tasksServices.CountCompletedTask(user, start, end)
            );
        } catch(err){
            console.log(
                "Error: tasksController.Report: " +
                  JSON.parse(err.message)["message"]
              );
              next(err);
        }
    },
    CompletedTask : async function (req, res, next){
        try{
            console.log("task controller");
            const user = req.params.user;
            const start = req.params.start;
            const end = req.params.end;
            return standardServiceResponse(
                res,
                next,
                tasksServices.CompletedTask(user, start, end)
            );
        } catch(err){
            console.log(
                "Error: tasksController.Report: " +
                  JSON.parse(err.message)["message"]
              );
              next(err);
        }
    },
    CountIncompletedTask : async function (req, res, next){
        try{
            console.log("task controller");
            const user = req.params.user;
            const start = req.params.start;
            const end = req.params.end;
            return standardServiceResponse(
                res,
                next,
                tasksServices.CountIncompletedTask(user, start, end)
            );
        } catch(err){
            console.log(
                "Error: tasksController.Report: " +
                  JSON.parse(err.message)["message"]
              );
              next(err);
        }
    },
    IncompletedTask : async function (req, res, next){
        try{
            console.log("task controller");
            const user = req.params.user;
            const start = req.params.start;
            const end = req.params.end;
            return standardServiceResponse(
                res,
                next,
                tasksServices.IncompletedTask(user, start, end)
            );
        } catch(err){
            console.log(
                "Error: tasksController.Report: " +
                  JSON.parse(err.message)["message"]
              );
              next(err);
        }
    },
    TotalTask : async function (req, res, next){
        try{
            console.log("task controller.totalTask");
            const user = req.params.user;
            return standardServiceResponse(
                res,
                next,
                tasksServices.TotalTask(user)
            );
        } catch(err){
            console.log(
                "Error: tasksController.Report: " +
                  JSON.parse(err.message)["message"]
              );
              next(err);
        }
    },
    CountDueTask : async function (req, res, next){
        try{
            console.log("countDuetask controller");
            const user = req.params.user;
            return standardServiceResponse(
                res,
                next,
                tasksServices.CountDueTask(user)
            );
        } catch(err){
            console.log(
                "Error: tasksController.Report: " +
                  JSON.parse(err.message)["message"]
              );
              next(err);
        }
    }, 
    OverduedTask : async function (req, res, next){
        try{
            console.log("countDuetask controller");
            const user = req.params.user;
            return standardServiceResponse(
                res,
                next,
                tasksServices.OverduedTask(user)
            );
        } catch(err){
            console.log(
                "Error: tasksController.Report: " +
                  JSON.parse(err.message)["message"]
              );
              next(err);
        }
    }       
}