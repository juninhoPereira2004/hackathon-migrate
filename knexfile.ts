import { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'hackathon4',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/migrations',
    },
  },
};

export default config;