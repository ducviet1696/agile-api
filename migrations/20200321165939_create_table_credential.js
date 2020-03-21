exports.up = function (knex) {
    return knex.schema.createTable('credential', function (table) {
        table.increments('id');
        table.string('username');
        table.string('password');
        table.integer('role');
        table.integer('created_at');
        table.integer('updated_at');
        table.integer('deleted_at');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('credential');
};
