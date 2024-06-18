import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('Agenda', (table) => {
    table.increments('id').primary();
    table.integer('idoso_id').unsigned().notNullable();
    table.integer('agente_id').unsigned().notNullable();
    table.date('data_visita').notNullable();
    table.enu('periodo', ['manha', 'tarde', 'noite']).notNullable();
    table.enu('status', ['agendado', 'cancelado', 'concluido']).defaultTo('agendado');

    table.foreign('idoso_id').references('Idosos.id');
    table.foreign('agente_id').references('AgentesSaude.id');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('Agenda');
}
