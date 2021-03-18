const { standardServiceResponse } = require("../utils/ResponseHandler");
const passport = require("passport"); //for authen

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

    Report : async function (req,res,next){
        try{
            const finishedTask = req.body;
            await tasksServices.Report(finishedTask);
            res.sendStatus(200);
        } catch(err){
            console.log(
                "report", err
            );
            res.status(500).send(err);
        }
    }

   
}