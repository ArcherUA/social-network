import {ConnectionOptions} from 'typeorm';
import {
  POSTS_DB_HOST,
  POSTS_DB_PORT,
  POSTS_DB_NAME,
  POSTS_DB_USER,
  POSTS_DB_PASSWORD,
} from './index';

export const POSTS_DB_CONFIG = {
  type: 'postgres',
  host: POSTS_DB_HOST,
  port: POSTS_DB_PORT,
  username: POSTS_DB_USER,
  password: POSTS_DB_PASSWORD,
  database: POSTS_DB_NAME,
  entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
  synchronize: false,
  migrations: [`${__dirname}/../migrations/**/*.migration.ts`],
  // logging: NODE_ENV !== 'production',
  logging: false,
  cli: {
    migrationsDir: 'src/migration',
  },
} as ConnectionOptions;
