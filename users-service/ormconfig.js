const {
  USERS_DB_HOST,
  USERS_DB_PORT,
  USERS_DB_NAME,
  USERS_DB_USER,
  USERS_DB_PASSWORD,
} = process.env;

module.exports = [
  {
    'type': 'postgres',
    'host': USERS_DB_HOST,
    'port': USERS_DB_PORT,
    'database': USERS_DB_NAME,
    'username': USERS_DB_USER,
    'password': USERS_DB_PASSWORD,
    'autoSchemaSync': false,
    'entities': ['./src/common/entities/*.entity.ts'],
    'migrations': [
      './src/migrations/*.ts',
    ],
    cli: {
      'migrationsDir': './src/migrations',
    },
  },
];
