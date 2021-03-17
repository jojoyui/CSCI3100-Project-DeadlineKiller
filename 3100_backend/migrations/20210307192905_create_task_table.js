
exports.up = function(knex) {
    return knex.schema
        .createTable("task", table => {
            table.uuid("task_id").primary();
            table.string("name").notNullable();
            table.timestamp("due_date").notNullable();
            table.enum("type",['assignment','present','final','midterm']).notNullable();
            table.integer("completed_timestamp").notNullable();
            table.string("description");
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("task");
};
