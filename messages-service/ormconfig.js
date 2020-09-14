const {
  MESSAGES_DB_HOST,
  MESSAGES_DB_PORT,
  MESSAGES_DB_NAME,
  MESSAGES_DB_USER,
  MESSAGES_DB_PASSWORD,
} = process.env;

module.exports = [
  {
    type: 'postgres',
    host: MESSAGES_DB_HOST,
    port: MESSAGES_DB_PORT,
    database: MESSAGES_DB_NAME,
    username: MESSAGES_DB_USER,
    password: MESSAGES_DB_PASSWORD,
    autoSchemaSync: false,
    entities: ['./src/common/entities/*.entity.ts'],
    migrations: ['./src/migrations/*.ts'],
    cli: {
      migrationsDir: './src/migrations',
    },
  },
];
