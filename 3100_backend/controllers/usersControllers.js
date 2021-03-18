const { standardServiceResponse } = require("../utils/ResponseHandler");
const passport = require("passport"); //for authen

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
    }
}