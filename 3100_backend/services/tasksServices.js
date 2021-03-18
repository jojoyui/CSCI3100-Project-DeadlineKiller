const knex = require("knex")(require("../knexfile.js")["development"]);

module.exports = {
    getTasks: async function(user){
        return await knex('task')
            .innerJoin('group','group.task_id','task.task_id')
            .where({user_id: user});           
    },
    countTask: async function(user){
        return await knex('task')
            .innerJoin('group','group.task_id','task.task_id')
            .count('taskid')
            .where ({user_id: user})
            .whereNotNull('completed_timestamp');
    }
}