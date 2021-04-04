const handlebars = require("handlebars");
const nodemailer = require("nodemailer");
const mjml2html = require("mjml");
const fs =require("fs");
const path = require("path");
const knex = require("knex")(require("../knexfile.js")["development"]);
const moment = require("moment");
const template = handlebars.compile(fs.readFileSync(path.join(__dirname,'/emailcontent.mjml'),"utf8"));

async function main(){
    transporter = nodemailer.createTransport({
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
    
    
    var t = 'Taskname';
    var count = 1;
    var user = {};
    var task = {};

    // var task = {'Task1name': 'TestFinal --------> Due Date: 2021-03-20' , 'Task2name': 'TestGroup-t3 --------> Due Date: 2021-03-22'}
    // const vars = {
    //     name: "Mak",
    //     task_no: 3,
    //     task: task,
    // }
    // const html = mjml2html(template(vars)).html;
    get_task(function(data){
        
        var json = JSON.parse(data)
        var name = json[0].uname;
        user.name = name;
        user.email = json[0].email
        console.log(json);
        for(var x=0;x<json.length;x++){
            if(user.name == json[x].uname){
                taskname = t + count;
                task[taskname] = json[x].tname + " .................... " + "  Due_date: " + moment(json[x].due_date).format("YYYY-MM-DD");
                count++;
                if(x == json.length-1){
                    console.log(task);
                    const vars = {
                        name: user.name,
                        task_no: count-1,
                        task: task,
                    }
                    const html = mjml2html(template(vars)).html;
                    let info = transporter.sendMail({
                                    from: '"DeadlineKiller" <deadlinekiller@163.com>',
                                    to: user.email ,
                                    subject: "Your tasks will due soon!" ,
                                    html: html
                                });
                    console.log(info);
                }
            }
            else{
                console.log(task)
                const vars = {
                    name: user.name,
                    task_no: count-1,
                    task: task,
                }
                const html = mjml2html(template(vars)).html;
                let info = transporter.sendMail({
                                from: '"DeadlineKiller" <deadlinekiller@163.com>',
                                to: user.email ,
                                subject: "Your tasks will due soon!" ,
                                html: html
                            });
                console.log(info);
                user.name = json[x].uname;
                user.email = json[x].email;
                task = {};
                count = 1;
                x--;
            }
        }
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

    
};

setInterval(function(){
    var refreshHours = new Date().getHours();
    var refreshMin = new Date().getMinutes();
    var refreshSec = new Date().getSeconds();
    if(refreshHours=='11' && refreshMin=='00' && refreshSec=='0'){
        // 指定每天凌晨做的事情
        main().catch(console.error);
    }
}, 1000);