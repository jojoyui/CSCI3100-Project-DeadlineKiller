const knex = require("knex")(require("../knexfile.js")["development"]);

module.exports = {
    testingService: async function(){
        return await knex("user").select("*");
    }
}