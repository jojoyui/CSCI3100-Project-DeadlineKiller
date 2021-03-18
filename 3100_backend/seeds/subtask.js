
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          subtask_id: '7eede6ed-bc4b-414f-b4b9-55834eb303d3',
          task_id: '7eede6ed-bc4b-414f-b4b9-55834eb303d3',
          name: '3100_project',
          start_date: moment().format('YYYY-MM-DD HH:MM:SS'),
          end_date: '20210319',
          description: 'kill me please!'
        }
      ]);
    });
};
