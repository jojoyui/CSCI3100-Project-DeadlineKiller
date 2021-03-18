
exports.up = function(knex) {
    return knex.schema
        .createTable("task", table => {
            table.uuid("task_id").primary();
            table.string("name").notNullable();
            table.string("due_date").notNullable();
            table.enum("type",['assignment','present','final','midterm']).notNullable();
            table.integer("completed_timestamp").notNullable().defaultTo(0);
            table.string("description");
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("task");
};
