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
    }
}