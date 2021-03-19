## CSCI3100 Project – Deadline Killer Back End

CSCI3100 Software Enigeering (Spring 2021) Group Project: Deadline Killer

This software is created by the CSCI3100 students who studied in 2021 semester 2. We are students from Group B4 and this program is the back end of our application.

Build Set Up

1. This back end makes use of express.js and knex.js, and we controll all the node modules by using npm, so please install node.js and npm before running the software.
>
2. According to our set up, we use MySQL database (version 8.0.12) on port 3306. For better user experience, please set up like our development enviroment. And you can simply edit the knexfile.js file to change the configuration.
>
3. To build up the same testing enviroment, first download the nodemon and knex, then enter knex migrate:latest to sync up the tables in the database. And then run knex seed:run to run the seeds.
>
4. To start the back end, please enter nodemon to start it. It will using the port 9090 as default.
>
5. Log-in with username: 115512345@link.cuhk.edu.hk with password: anson
