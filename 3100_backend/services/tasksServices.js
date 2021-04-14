const { GatewayTimeout, NotAcceptable } = require("http-errors");

const knex = require("knex")(require("../knexfile.js")["development"]);

function addDate(date, days) {
    if(days == undefined || days == '') {
        days = 1;
    }
    date.setDate(date.getDate() + days);
    var month = date.getMonth() + 1;
    var day = date.getDate();
    // var hours = date.getHours();
    // var minutes = date.getMinutes();
    var mm = "'" + month + "'";
    var dd = "'" + day + "'";
    //单位数前面加0
    if(mm.length == 3) {
        month = "0" + month;
    }
    if(dd.length == 3) {
        day = "0" + day;
    }
    var time = date.getFullYear() + "-" + month + "-" + day;
    return time;
}

module.exports = {
    getTasks: async function(user){
        return await knex('task')
            .innerJoin('group','group.task_id','task.task_id')
            .where({user_id: user,
                    request: 'accept'
                })
            .whereNull('completed_timestamp')
            .orderBy('due_date');
    },

    TotalTask: async function(user){
        var now = new Date();
        var start = now.getFullYear()-1 + "-" + "01" + "-" + "01";
        var end = now.getFullYear() + "-" + "01" + "-" + "01";
        return await knex('task')
            .innerJoin('group','group.task_id','task.task_id')
            .where ({
                user_id: user,
                request: 'accept'
            })
            .where('due_date', '>=', start)
            .where('due_date', '<', end);
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

    CountCompletedTask: async function(user, start, end){
        var end_date = new Date(end);
        return await knex('task')
            .count('*', {as: 'number'})
            .innerJoin('group','group.task_id','task.task_id')
            .where ({
                user_id: user,
                request: 'accept'
            })
            .whereNotNull('completed_timestamp')
            .where('completed_timestamp', '>=', start)
            .where('completed_timestamp', '<', addDate(end_date,1))
    },

    CompletedTask: async function(user, start, end){
        var end_date = new Date(end);
        return await knex('task')
            .innerJoin('group','group.task_id','task.task_id')
            .where ({
                user_id: user,
                request: 'accept'
            })
            .whereNotNull('completed_timestamp')
            .where('completed_timestamp', '>=', start)
            .where('completed_timestamp', '<', addDate(end_date,1))
            .orderBy('due_date', 'desc');
    },

    completeTask: async function(task){
        console.log("completeTask service");
        return await knex("task")
        .where({task_id: task})
        .update({
          completed_timestamp: new Date(),
        })
    },

    updateTask: async function(task,date){
        console.log("updateTask service");
        return await knex("task")
        .where({task_id: task})
        .update({
          due_date: date,
        });
    },

    updateTaskInfo: async function(task,name,date,details){
        if(details != 'nochange'){
            console.log("updateTask service");
            return await knex("task")
            .where({task_id: task})
            .update({
                name: name,
                due_date: date,
                description: details
            });
        }
        else{
            console.log("updateTask service");
            return await knex("task")
            .where({task_id: task})
            .update({
                name: name,
                due_date: date,
            });
        }
        
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
    CountIncompletedTask: async function(user, start, end){
        var end_date = new Date(end);
        return await knex('task')
            .count('*', {as: 'number'})
            .innerJoin('group','group.task_id','task.task_id')
            .where ({
                user_id: user,
                request: 'accept'
            })
            .whereNull('completed_timestamp')
            .where('due_date', '>=', start)
            .where('due_date', '<', addDate(end_date,1));
    },
    IncompletedTask: async function(user, start, end){
        var end_date = new Date(end);
        return await knex('task')
            .innerJoin('group','group.task_id','task.task_id')
            .where ({
                user_id: user,
                request: 'accept'
            })
            .whereNull('completed_timestamp')
            .where('due_date', '>=', start)
            .where('due_date', '<', addDate(end_date,1))
            .orderBy('due_date', 'asc');
    },
    CountDueTask: async function(user){
        let now = new Date();
        let month = now.getMonth() + 1;
        let day = now.getDate();
        let time = now.getFullYear() + "-" + ('0' + month).slice(-2)  + "-" + ('0' + day).slice(-2); 
        console.log(time)
        return await knex('task')
        .count('*', {as: 'number'})
        .innerJoin('group','group.task_id','task.task_id')
        .where ({
            user_id: user,
            request: 'accept'
        })
        .whereNull('completed_timestamp')
        .where('due_date', '<', time);
    },
    OverduedTask: async function(user){
        let now = new Date();
        let month = now.getMonth() + 1;
        let day = now.getDate();
        let time = now.getFullYear() + "-" + ('0' + month).slice(-2)  + "-" + ('0' + day).slice(-2); 
        console.log(time)
        return await knex('task')
        .innerJoin('group','group.task_id','task.task_id')
        .where ({
            user_id: user,
            request: 'accept'
        })
        .whereNull('completed_timestamp')
        .where('due_date', '<', time)
        .orderBy('due_date', 'desc');;
    },

    //subtask
    createSubTask: async function(newSubTask){
        console.log("create subtask service");
        return await knex("subtask").insert({
            subtask_id: newSubTask.subtask_id, 
            task_id: newSubTask.task_id,
            name: newSubTask.name,
            start_date: newSubTask.start_date,
            end_date: newSubTask.end_date,
            description: newSubTask.description
        });
    },
    Updategroup: async function(task,user,subid){
        console.log("update subtask in group");
        return await knex("group")
            .where({task_id: task})
            .where({user_id: user})
            .update({subtask_id: subid});
            
    },
    getSubTasks: async function(tid){
        console.log("getSubTask service");
        return await knex('subtask')
            .where({task_id: tid})
            .orderBy('end_date', 'asc');
    },
    completeSubTask: async function(sid){
        console.log("completeSubTask service");
        return await knex("subtask")
        .where({subtask_id: sid})
        .update({
          completed_timestamp: new Date(),
        })
    },


    CountTotalTask: async function(user){
        return await knex('task')
            .count('*', {as: 'number'})
            .innerJoin('group','group.task_id','task.task_id')
            .where ({
                user_id: user,
                request: 'accept'
            });
    },

    CountDueTask: async function(user){
        var now = new Date();
        var month = now.getMonth() + 1;
        if (month<10){
            month = '0'+ month
        };
        var day = now.getDate();
        if (day<10){
            day = '0'+ day
        };
        var time = now.getFullYear() + "-" + month + "-" + day + " 00:00:00"
        console.log(time)
        return await knex('task')
        .count('*', {as: 'number'})
        .innerJoin('group','group.task_id','task.task_id')
        .where ({
            user_id: user,
            request: 'accept'
        })
        .whereNull('completed_timestamp')
        .where('due_date', '<', time);
    }

}
