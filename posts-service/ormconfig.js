const {
  POSTS_DB_HOST,
  POSTS_DB_PORT,
  POSTS_DB_NAME,
  POSTS_DB_USER,
  POSTS_DB_PASSWORD,
} = process.env;

module.exports = [
  {
    'type': 'postgres',
    'host': POSTS_DB_HOST,
    'port': POSTS_DB_PORT,
    'database': POSTS_DB_NAME,
    'username': POSTS_DB_USER,
    'password': POSTS_DB_PASSWORD,
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
