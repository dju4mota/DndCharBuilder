
// Criação das tabelas no banco de dados
exports.up = function(knex) {
  return knex.schema.createTable('characters', function(table){
      table.string('id').primary();   //ID que referencia a pergunta
      table.string('name').notNullable(); 
      table.string('classe').notNullable(); 
      table.string('race').notNullable(); 
      table.string('level').notNullable(); 
      table.string('attributes').notNullable(); 
  });
};

// Exclusão das tabelas no banco de dados
exports.down = function(knex) {
  return knex.schema.dropTable('characters');
};
