const { notification } = require("../controllers/usersControllers.js");
const handlebars = require("handlebars");
const nodemailer = require("nodemailer");
const mjml2html = require("mjml");
const fs =require("fs");
const path = require("path");
const knex = require("knex")(require("../knexfile.js")["development"]);
const moment = require("moment");
const template = handlebars.compile(fs.readFileSync(path.join(__dirname,'../controllers/verifyEmailcontent.mjml'),"utf8"));

var transporter = nodemailer.createTransport({
    host: "smtp.163.com",
    secureConnection: true,
    port: 465,
    secure: true,
    auth: {
        user: 'deadlinekiller@163.com',
        pass: 'ROWZASTOILJXHFVP'
    }
});

module.exports = {
    testingService: async function(){
        return await knex("user").select("*");
    },
    register: async function(newUser){
        const vars = {
            name: newUser.name,
            user_id: newUser.user_id
            
        }
        const html = mjml2html(template(vars)).html;
        console.log("user register services");
        let info = transporter.sendMail({
            from: '"DeadlineKiller" <deadlinekiller@163.com>',
            to: newUser.email ,
            subject: "Verify your DeadlineKiller account" ,
            html: html
        });
        console.log(info);
        return await knex("user").insert({
            user_id: newUser.user_id,
            name: newUser.name,
            password: newUser.password,
            email: newUser.email,
            password_reminder: newUser.password_reminder
        });
    },
    verify: async function(user){
        return await knex("user")
        .update({verified: 1})
        .where({user_id: user.user_id});
    },

    login: async function(logInUser){
        console.log("user login services");
        
        await knex("user")
            .where({email: logInUser.email})
            .select('password')
            .select('verified')
            .then(function(result){
                console.log(result[0]);
                if(!result || !result[0]){// not found
                    console.log('invalid email');
                    return done(null, false, { message: "Invalid username" });
                } 
                if(result[0].verified == 0){
                    console.log("not yet verify");
                    throw Error("not yet verify");
                }else if(logInUser.password == result[0].password){
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