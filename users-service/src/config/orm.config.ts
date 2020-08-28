import { ConnectionOptions } from 'typeorm';
import {
  USERS_DB_HOST,
  USERS_DB_PORT,
  USERS_DB_NAME,
  USERS_DB_USER,
  USERS_DB_PASSWORD,
} from './index';

export const USERS_DB_CONFIG = {
  type: 'postgres',
  host: USERS_DB_HOST,
  port: USERS_DB_PORT,
  username: USERS_DB_USER,
  password: USERS_DB_PASSWORD,
  database: USERS_DB_NAME,
  entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
  synchronize: false,
  migrations: [`${__dirname}/../migrations/**/*.migration.ts`],
  // logging: NODE_ENV !== 'production',
  logging: false,
  cli: {
    migrationsDir: 'src/migration',
  },
} as ConnectionOptions;
