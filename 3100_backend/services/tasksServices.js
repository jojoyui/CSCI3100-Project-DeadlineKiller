const knex = require("knex")(require("../knexfile.js")["development"]);

module.exports = {
    getTasks: async function(user){
        return await knex('task')
            .innerJoin('group','group.task_id','task.task_id')
            .where({user_id: user});           
    },

    createTask: async function(newTask){
        console.log("create task service");
        return await knex("task").insert({
            task_id: newTask.task_id,
            name: newTask.name,
            due_date: newTask.DueDate,
            type: newTask.type,
            description: newTask.description
        });
    },
}