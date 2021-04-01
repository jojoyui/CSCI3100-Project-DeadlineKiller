const knex = require("knex")(require("../knexfile.js")["development"]);

module.exports = {
    getTasks: async function(user){
        return await knex('task')
            .innerJoin('group','group.task_id','task.task_id')
            .where({user_id: user});           
    },

    getTasksId: async function(user){
        return await knex('task')
            .innerJoin('group','group.task_id','task.task_id')
            .where({user_id: user})
            .select('user_id');           
    },
 
    createGroup: async function(group){
        console.log("create group services");
        return await knex("group").insert({
            task_id: group.task_id,
            user_id: group.user_id,
            request: group.request
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
    },
    createSubTask: async function(newSubTask){
        console.log("create subtask service");
        return await knex("subtask").insert({
            subtask_id: newSubTask.subtask_id, 
            task_id: newSubTask.task_id,
            name: newSubTask.name,
            start_date: newSubTask.start_date,
            end_date: newSubTask.end_date,
            description: newTask.description
        });
    },
    Updategroup: async function(task,user,subid){
        console.log("update subtask in group");
        return await knex("group")
            .where({task_id: task})
            .where({user_id: user})
            .update({subtask_id: subid});
            
    }

    
}