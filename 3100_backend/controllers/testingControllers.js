const { standardServiceResponse } = require("../utils/ResponseHandler");
const testingServices = require("../services/testingServices.js");

module.exports = {
    testingControll : function (req, res, next){
        try{
            console.log("testing controller");
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