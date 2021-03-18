
exports.up = function(knex) {
    return knex.schema
        .createTable("subtask", table => {
            table.uuid("subtask_id").primary();
            table.uuid("task_id");
            //table.foreign("task_id").references(task_id).inTable('task');
            table.string("name").notNullable();
            table.date("start_date").notNullable();
            table.date("end_date").notNullable();
            table.dateTime("completed_timestamp");
            table.string("description");
            table.timestamps();

        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("subtask");
};
