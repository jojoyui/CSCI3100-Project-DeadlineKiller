
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('subtask').del()
      .then(function () {
        // Inserts seed entries
        return knex('subtask').insert([
          {
            subtask_id:'e01a2d0e-86f1-11eb-8dcd-0242ac130003',
            task_id: '188a1257-ef20-4cbc-a1e7-949805fb7a6a', 
            name: 'design ui',
            start_date: '2021-03-10',
            end_date: '2021-03-16',
            completed_timestamp: '2021-03-13 15:14:07',
            description: 'design the project ui to facilite future enhancement'},
          {
            subtask_id:'348243ee-86f3-11eb-8dcd-0242ac130003',
            task_id: '188a1257-ef20-4cbc-a1e7-949805fb7a6a', 
            name: 'develop',
            start_date: '2021-03-16',
            end_date: '2021-03-20',
            description: 'develop frontend and backend'},
            
        ]);
      });
  };
  
