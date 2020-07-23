import { ConnectionOptions } from 'typeorm';
import {
  NETWORK_DB_HOST,
  NETWORK_DB_PORT,
  NETWORK_DB_NAME,
  NETWORK_DB_USER,
  NETWORK_DB_PASSWORD,
  NODE_ENV,
} from './index';

export const NETWORK_DB_CONFIG = {
  type: 'postgres',
  host: NETWORK_DB_HOST,
  port: parseInt(NETWORK_DB_PORT, 10),
  username: NETWORK_DB_USER,
  password: NETWORK_DB_PASSWORD,
  database: NETWORK_DB_NAME,
  entities: [ `${__dirname}/../**/*.entity{.ts,.js}` ],
  synchronize: false,
  migrations: [`${__dirname}/../migrations/**/*.migration.ts`],
  // logging: NODE_ENV !== 'production',
  logging: false,
  cli: {
    migrationsDir: 'src/migration',
  },
} as ConnectionOptions;
