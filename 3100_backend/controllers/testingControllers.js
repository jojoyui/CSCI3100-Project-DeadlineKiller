const { standardServiceResponse } = require("../utils/ResponseHandler");
const testingServices = require("../services/testingServices.js");

module.exports = {
    createTask : async function (req, res, next){
        try{
            console.log("createTask testing controller");
            const newTask = req.body;
            return standardServiceResponse(
                res,
                next,
                testingServices.testingService()
            );
        } catch(err){
            console.log(
                "Error: TestController.showHelloWorldControl: " +
                  JSON.parse(err.message)["message"]
              );
              next(err);
        }
    }
}