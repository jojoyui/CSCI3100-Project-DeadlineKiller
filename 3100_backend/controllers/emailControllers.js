"use strict";
const knex = require("knex")(require("../knexfile.js")["development"]);
const moment = require("moment");
const nodemailer = require("nodemailer");
async function main(){
    let transporter = nodemailer.createTransport({
        host: "smtp.163.com",
        secureConnection: true,
        port: 465,
        secure: true,
        auth: {
            user: 'deadlinekiller@163.com',
            pass: 'ROWZASTOILJXHFVP'
        }
    });
    var now = new Date();
    var addTime = addDate(now, 3);//当前时间加3天
    var get_task = function(callback) {
                        knex('group')
                            .innerJoin('task','group.task_id','task.task_id')
                            .innerJoin('user','group.user_id','user.user_id')
                            .where ('due_date', '<=', addTime)
                            .whereNull('completed_timestamp')
                            .orderBy('email')
                            .select('user.name as uname', 'due_date','email','task.name as tname')
                            .then(function(result){
                                callback(JSON.stringify(result))
                            });
                    };

    get_task(function(data){
        var json = JSON.parse(data)
        console.log(json);
        var users = [];
        var tasks = "";
        var count;
        //find all users
        for (var x=0;x<json.length;x++){
            count = 0;
            for(var j=0;j<users.length;j++){
                if(users[j] == json[x].email){
                    count++;
                    break;
                }
            }
            if(count==0){
                users[users.length] = json[x].email;
            }
        };
        //find users' tasks
        var x = 0;
        for(var j=0;j<json.length;j++){
            if(json[j].email == users[x]){
                tasks = tasks + "Task name: "+ json[j].tname + "  Due_date: " + moment(json[j].due_date).format("YYYY-MM-DD") + "\n";
                console.log(tasks);
                //如果到了最后一个
                if(j==json.length-1){
                    let info = transporter.sendMail({
                        from: '"Deadlinekiller" <deadlinekiller@163.com>',
                        to: users[x] ,
                        subject: "Your tasks will due soon!" ,
                        text: tasks
                    });
                    console.log(info);
                }
            }
            else{
                let info = transporter.sendMail({
                    from: '"Deadlinekiller" <deadlinekiller@163.com>',
                    to: users[x] ,
                    subject: "Your tasks will due soon!" ,
                    text: tasks
                });
                console.log(info);
                tasks = "";
                x++;
                j--;
            }
        };
    });

    function addDate(date, days) {
        if(days == undefined || days == '') {
            days = 1;
        }
        date.setDate(date.getDate() + days);
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var mm = "'" + month + "'";
        var dd = "'" + day + "'";
        //单位数前面加0
        if(mm.length == 3) {
            month = "0" + month;
        }
        if(dd.length == 3) {
            day = "0" + day;
        }
        var time = date.getFullYear() + "-" + month + "-" + day+ " " + hours + ":" + minutes;
        return time;
    }

    
}

setInterval(function(){
    var refreshHours = new Date().getHours();
    var refreshMin = new Date().getMinutes();
    var refreshSec = new Date().getSeconds();
    if(refreshHours=='15' && refreshMin=='55' && refreshSec=='0'){
        // 指定每天凌晨做的事情
        main().catch(console.error);
    }
}, 1000);



