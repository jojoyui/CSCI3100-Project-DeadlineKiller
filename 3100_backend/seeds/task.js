
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('task').del()
      .then(function () {
        // Inserts seed entries
        return knex('task').insert([
          {
            user_id: '6eede6ed-bc4b-414f-b4b9-55834eb303d3', 
            name: 'steven tang',
            password: '123456',
            email: '115512345@link.cuhk.edu.hk',
            password_reminder: '123456'},
          
        ]);
      });
  };
  