
exports.up = function(knex) {
  return  knex.schema.createTable('personagens',function (table) {
    table.string('id').primary();
    table.string('nome').notNullable();
    table.string('atributos').notNullable();
    
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('personagens')
};
