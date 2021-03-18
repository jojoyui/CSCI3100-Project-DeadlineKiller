
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          user_id: '6eede6ed-bc4b-414f-b4b9-55834eb303d3', 
          name: 'steven tang',
          password: '123456',
          email: '115512345@link.cuhk.edu.hk',
          password_reminder: '123456'},
        {
          user_id: '61407438-bd60-4715-a4eb-de5bcdeb37f5', 
          name: 'anson ngai',
          password: 'anson',
          email: '12345@link.cuhk.edu.hk',
          password_reminder: 'name'},
        
      ]);
    });
};
