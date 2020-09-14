import { ConnectionOptions } from 'typeorm';
import {
  MESSAGES_DB_HOST,
  MESSAGES_DB_PORT,
  MESSAGES_DB_NAME,
  MESSAGES_DB_USER,
  MESSAGES_DB_PASSWORD,
} from './';

export const MESSAGES_DB_CONFIG = {
  type: 'postgres',
  host: MESSAGES_DB_HOST,
  port: parseInt(MESSAGES_DB_PORT, 10),
  username: MESSAGES_DB_USER,
  password: MESSAGES_DB_PASSWORD,
  database: MESSAGES_DB_NAME,
  entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
  synchronize: false,
  migrations: [`${__dirname}/../migrations/**/*.migration.ts`],
  // logging: NODE_ENV !== 'production',
  logging: false,
  cli: {
    migrationsDir: 'src/migration',
  },
} as ConnectionOptions;
