import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('Vacinas', (table) => {
    table.increments('id').primary();
    table.string('nome', 100).notNullable();
    table.string('fabricante', 100);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('Vacinas');
}
