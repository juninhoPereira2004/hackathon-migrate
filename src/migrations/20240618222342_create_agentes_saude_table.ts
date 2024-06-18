import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('AgentesSaude', (table) => {
    table.increments('id').primary();
    table.string('nome', 100).notNullable();
    table.string('telefone', 20);
    table.string('email', 100);
    table.string('especialidade', 50).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('AgentesSaude');
}
