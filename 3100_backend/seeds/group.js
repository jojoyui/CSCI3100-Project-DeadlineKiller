
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('group').del()
      .then(function () {
        // Inserts seed entries
        return knex('group').insert([
          {
            user_id: 'f72fedc3-49fc-4032-a761-4531202488b6', 
            task_id: 'Design model',
            subtask_id: '123456',
            request: 'accept'},
            
          {
            user_id: 'f72fedc3-49fc-4032-a761-4531202488b6', 
            task_id: 'Design model',
            subtask_id: '123456',
            request: 'accept'},
          {
            user_id: 'f72fedc3-49fc-4032-a761-4531202488b6', 
            task_id: 'Design model',
            subtask_id: '123456',
            request: 'accept'}
          
        ]);
      });
  };
  