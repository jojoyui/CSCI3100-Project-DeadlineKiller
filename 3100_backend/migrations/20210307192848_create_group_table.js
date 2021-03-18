
exports.up = function(knex) {
    return knex.schema
    .createTable("group", table => {
        table.uuid("user_id");
        table.uuid("task_id");
        table.uuid("subtask_id");
        //table.foreign("user_id").references(user_id).inTable('user');
        //table.foreign("task_id").references(task_id).inTable('task');
        //table.foreign("subtask_id").references(subtask_id).inTable('subtask');
        table.enum("request",['request','accept','decline']).notNullable();
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("group");
};
