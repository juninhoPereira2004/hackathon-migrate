import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('Idosos', (table) => {
    table.increments('id').primary();
    table.string('nome', 100).notNullable();
    table.date('data_nascimento').notNullable();
    table.string('telefone', 20);
    table.string('endereco', 255).notNullable();
    table.string('cidade', 50).notNullable();
    table.string('estado', 2).notNullable();
    table.string('cep', 9).notNullable()    ;
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('Idosos');
}
