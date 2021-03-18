const knex = require("knex")(require("../knexfile.js")["development"]);

module.exports = {
    getTasks: async function(user){
        return await knex('task')
            .innerJoin('group','group.task_id','task.task_id')
            .where({user_id: user});           
    },
    createTask: async function(task){
        console.log("create task services");
        return await knex("task").insert({
            task_id: task.task_id,
            name: task.name,
            due_date: task.due_date,
            type: task.type,
            description: task.description,
        });
        // return await knex("group").insert({
        //     task_id: task.task_id,
        //     user_id: task.user_id,
        //     status: "accept",
        // });
    },

    createGroup: async function(group){
        console.log("create group services");
        return await knex("group").insert({
            task_id: group.task_id,
            user_id: group.user_id,
            status: "request",
        });
    },
}