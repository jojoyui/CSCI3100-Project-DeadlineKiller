
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('task').del()
      .then(function () {
        // Inserts seed entries
        return knex('task').insert([
          {
            task_id: 'f72fedc3-49fc-4032-a761-4531202488b6', 
            name: 'CSCI3100 Project',
            due_date: '2021-03-16 23:59:59',
            type: 'assignment',
            completed_timestamp: '2021-03-13 15:14:07',
            description: 'The group project was the spotlight of the course. We grouped in a team of 4-5 people and worked on a web application of our own choice.'},
          {
            task_id: '188a1257-ef20-4cbc-a1e7-949805fb7a6a', 
            name: 'CSCI Final year project',
            due_date: '2021-05-15 23:59:59',
            type: 'present',
            description: 'This is the final year project of each computer science students. Students can work on any topic as they want.'},
          {
            task_id: 'abv72fedc3-49fc-4032-a761-453', 
            name: 'CSCI3100 assignment',
            due_date: '2021-03-18 23:59:59',
            type: 'assignment',
            completed_timestamp: '2021-03-18 15:14:07',
            description: 'The group project was the spotlight of the course. We grouped in a team of 4-5 people and worked on a web application of our own choice.'},
        ]);
      });
  };
  
