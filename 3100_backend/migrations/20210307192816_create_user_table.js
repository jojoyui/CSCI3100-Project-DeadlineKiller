//create user table
exports.up = function(knex) {
    return knex.schema
        .createTable("user", table => {
            table.uuid("user_id").primary();
            table.string("name").notNullable();
            table.string("password").notNullable();
            table.string("email").notNullable();
            table.string("password_reminder").notNullable();
            table.integer("verified").notNullable();
            table.timestamps();
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("user");
};
