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
            const start = req.params.start;
            const end = req.params.end;
            return standardServiceResponse(
                res,
                next,
                tasksServices.countTask(user, start, end)
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
            const start = req.params.start;
            const end = req.params.end;
            return standardServiceResponse(
                res,
                next,
                tasksServices.countTask2(user, start, end)
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