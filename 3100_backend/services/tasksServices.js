const knex = require("knex")(require("../knexfile.js")["development"]);

module.exports = {
    getTasks: async function(user){
        return await knex('task')
            .innerJoin('group','group.task_id','task.task_id')
            .where({user_id: user});           
    },
 

    createGroup: async function(group){
        console.log("create group services");
        return await knex("group").insert({
            task_id: group.task_id,
            user_id: group.user_id,
            request: "accept",
        });
    },

    countTask: async function(user, start, end){
        return await knex('task')
            .count('*', {as: 'number'})
            .innerJoin('group','group.task_id','task.task_id')
            .where ({user_id: user})
            .whereNotNull('completed_timestamp')
            .where('completed_timestamp', '>=', start)
            .where('completed_timestamp', '<', end+1);
            // .where('completed_timestamp', '<', '2021-03-16T23:59:59Z');
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
    countTask2: async function(user, start, end){
        return await knex('task')
            .count('*', {as: 'number'})
            .innerJoin('group','group.task_id','task.task_id')
            .where ({user_id: user})
            .whereNull('completed_timestamp')
            .where('due_date', '>=', start)
            .where('due_date', '<', end+1);
    }
}