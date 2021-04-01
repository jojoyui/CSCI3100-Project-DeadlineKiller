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

    countTask : async function (req, res, next){
        try{
            console.log("task controller");
            const user = req.params.user;
            return standardServiceResponse(
                res,
                next,
                tasksServices.countTask(user)
            );
        } catch(err){
            console.log(
                "Error: tasksController.Report: " +
                  JSON.parse(err.message)["message"]
              );
              next(err);
        }
    },
    countTask2 : async function (req, res, next){
        try{
            console.log("task controller");
            const user = req.params.user;
            return standardServiceResponse(
                res,
                next,
                tasksServices.countTask2(user)
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