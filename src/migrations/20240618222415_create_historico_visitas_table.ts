import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('HistoricoVisitas', (table) => {
    table.increments('id').primary();
    table.integer('idoso_id').unsigned().notNullable();
    table.integer('agente_id').unsigned().notNullable();
    table.integer('vacina_id').unsigned().notNullable();
    table.date('data_visita').notNullable();
    table.enu('periodo', ['manha', 'tarde', 'noite']).notNullable();
   

    table.foreign('idoso_id').references('Idosos.id');
    table.foreign('agente_id').references('AgentesSaude.id');
    table.foreign('vacina_id').references('Vacinas.id');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('HistoricoVisitas');
}
