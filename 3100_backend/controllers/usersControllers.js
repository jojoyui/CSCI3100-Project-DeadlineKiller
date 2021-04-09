const { standardServiceResponse } = require("../utils/ResponseHandler");
//const passport = require("passport"); //for authen

const usersServices = require("../services/usersServices.js");

module.exports = {
    register : async function (req, res, next){
        try{
            console.log("register controller");
            const newUser = req.body;
            return standardServiceResponse(
                res,
                next,
                usersServices.register(newUser)
            );
        } catch(err){
            console.log(
                "Error: UsersController.register: " +
                  JSON.parse(err.message)["message"]
              );
              next(err);
        }
    },
    login : async function (req, res, next){
        try{
            const logInUser = req.body;
            await usersServices.login(logInUser);
            res.sendStatus(200);

        } catch(err){
            console.log(
               "testing", err
            );
            res.status(500).send(err);
            //next(err);
        }
    },
    getPasswordReminder: async function (req, res, next){
        try{
            console.log("users controller, getPasswordReminder");
            const email = req.params.email;
            return standardServiceResponse(
                res,
                next,
                usersServices.getPasswordReminder(email)
            );
        } catch(err){
            console.log(
                "Error: usersController.getPasswordReminder: " +
                  JSON.parse(err.message)["message"]
              );
              next(err);
        }
    },
    getUserId: async function(req,res,next){
        try{
            console.log("register controller");
            const email = req.params.email;
            return standardServiceResponse(
                res,
                next,
                usersServices.getUserId(email)
            );
        } catch(err){
            console.log(
                "Error: usersController.getUserId: " +
                  JSON.parse(err.message)["message"]
              );
              next(err);
        }
    },

    getUserName: async function(req,res,next){
        try{
            console.log("getUserName controller");
            const user = req.params.user;
            return standardServiceResponse(
                res,
                next,
                usersServices.getUserName(user)
            );
        } catch(err){
            console.log(
                "Error: usersController.getUserName: " +
                  JSON.parse(err.message)["message"]
              );
              next(err);
        }
    },


    notification: async function(req,res,next){
        try{
            console.log("notification controller");
            const user = req.params.user
            return standardServiceResponse(
                res,
                next,
                usersServices.notification(user)
            );
        } catch(err){
            console.log(
                "Error: usersController.notification: " +
                  JSON.parse(err.message)["message"]
              );
              next(err);
        }
    },

    countrequest: async function(req,res,next){
        try{
            console.log("countrequest controller");
            const user = req.params.user
            return standardServiceResponse(
                res,
                next,
                usersServices.countrequest(user)
            );
        } catch(err){
            console.log(
                "Error: usersController.countrequest: " +
                  JSON.parse(err.message)["message"]
              );
              next(err);
        }
    },

    Updateaccept: async function(req,res,next){
        try{
            console.log("countaccept controller");
            const task = req.params.task
            return standardServiceResponse(
                res,
                next,
                usersServices.Updateaccept(task)
            );
        } catch(err){
            console.log(
                "Error: usersController.countaccept: " +
                  JSON.parse(err.message)["message"]
              );
              next(err);
        }
    },

    Updatedecline: async function(req,res,next){
        try{
            console.log("countdecline controller");
            const task = req.params.task
            return standardServiceResponse(
                res,
                next,
                usersServices.Updatedecline(task)
            );
        } catch(err){
            console.log(
                "Error: usersController.countdecline: " +
                  JSON.parse(err.message)["message"]
              );
              next(err);
        }
    }

}