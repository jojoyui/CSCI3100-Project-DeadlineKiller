
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('group').del()
      .then(function () {
        // Inserts seed entries
        return knex('group').insert([
          {
            user_id: '61407438-bd60-4715-a4eb-de5bcdeb37f5', 
            task_id: 'f72fedc3-49fc-4032-a761-4531202488b6',
            subtask_id: '',
            request: 'accept'},

          {
            user_id: '6eede6ed-bc4b-414f-b4b9-55834eb303d3', 
            task_id: '188a1257-ef20-4cbc-a1e7-949805fb7a6a',
            subtask_id: '',
            request: 'accept'},
          {
            user_id: '61407438-bd60-4715-a4eb-de5bcdeb37f5', 
            task_id: '188a1257-ef20-4cbc-a1e7-949805fb7a6a',
            subtask_id: '',
            request: 'accept'},         
          {
            user_id: '61407438-bd60-4715-a4eb-de5bcdeb37f5', 
            task_id: '',
            subtask_id: 'e01a2d0e-86f1-11eb-8dcd-0242ac130003',
            request: 'accept'},
          
        ]);
      });
  };
  
