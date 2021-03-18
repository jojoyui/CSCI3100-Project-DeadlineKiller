
exports.up = function(knex) {
    return knex.schema
        .createTable("user", table => {
            table.uuid("user_id").primary();
            table.string("name").notNullable();
            table.string("password").notNullable();
            table.string("email").notNullable();
            table.integer("password_reminder").notNullable().defaultTo(0);
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("user");
};
