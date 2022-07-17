/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('lessons', function(table){
    table.increments();
    table.string('title');
    table.string('description');
    table.string('videoURL');
    table
    .integer('professorId')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('professors')
    .onDelete('CASCADE');

    table
    .integer('courseId')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('courses')
    .onDelete('CASCADE');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('lessons');
};
