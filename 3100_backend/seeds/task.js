const knex = require("knex")(require("../knexfile.js")["development"]);
// var knexClien = require('../knexfile')

exports.seed = function(data) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function (data) {
      // Inserts seed entries
      return knex('task').insert([
        {
          task_id: '6eede6ed-bc4b-414f-b4b9-55834eb303d3',
          name: '3100_project',
          due_date:'20210316',
          type: '2',
          description: 'kill me please!'
        }
        
      ]);
    });
};
