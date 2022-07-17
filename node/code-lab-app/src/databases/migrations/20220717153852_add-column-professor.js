/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable('courses', function(t){
    t
      .integer('professorId')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('professors')
      .onDelete('CASCADE');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('professors', function(t){
    t.dropForeign('professorId');
    t.dropColumn('professorId');
  })
};
