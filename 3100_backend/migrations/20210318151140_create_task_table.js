
exports.up = function(knex) {
    return knex.schema
        .createTable("task", table => {
            table.uuid("task_id").primary();
            table.string("name").notNullable();
            table.dateTime("due_date").notNullable();
            table.enum("type",['assignment','present','final','midterm', 'project']).notNullable();
            table.dateTime("completed_timestamp");
            table.string("description");
            table.timestamps();
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("task");
};
