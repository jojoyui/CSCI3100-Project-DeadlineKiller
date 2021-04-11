const { notification } = require("../controllers/usersControllers.js");

const knex = require("knex")(require("../knexfile.js")["development"]);

module.exports = {
    testingService: async function(){
        return await knex("user").select("*");
    },
    register: async function(newUser){
        console.log("user register services");
        return await knex("user").insert({
            user_id: newUser.user_id,
            name: newUser.name,
            password: newUser.password,
            email: newUser.email,
            password_reminder: newUser.password_reminder
        });
    },

    login: async function(logInUser){
        console.log("user login services");
        
        await knex("user")
            .where({email: logInUser.email})
            .select('password')
            .then(function(result){
                if(!result || !result[0]){// not found
                    console.log('invalid email');
                    return done(null, false, { message: "Invalid username" });
                } 
                if (logInUser.password == result[0].password){
                    console.log("sucessful login");
                    return;
                }else{
                    console.log("invalid pw");
                    throw Error("invalid pw");
                }
            }
        );
    },

    getUserId: async function(email){
        console.log("usersService: getuserid");
        return await knex("user").where({email: email}).select('user_id');
    },
    getPasswordReminder: async function(email){
        console.log("usersService: getPasswordReminder");
        return await knex("user").where({email: email}).select('password_reminder');
    },

    notification: async function(user){
        console.log("usersService: notification")
        return await knex("group")
            .innerJoin('task','group.task_id','task.task_id')
            .where({
                user_id: user,
                request: 'request'
            })
            .select('group.task_id as tid', 'name as task', 'type');
    },

    Updateaccept: async function(task){
        console.log("usersService: notification")
        return await knex("group")
            .where({task_id: task})
            .update({request: 'accept'});
    },

    Updatedecline: async function(task){
        console.log("usersService: notification")
        return await knex("group")
            .where({task_id: task})
            .update({request: 'decline'});
    },
    
    countrequest: async function(user){
        console.log("usersService: countrequest")
        return await knex("group")
            .count('*' , {as: 'number'})
            .where({
                user_id: user,
                request: 'request'
            });
    }
    
}