import { getEnv } from '../common/utils/get-env';
import { envSchema } from './required-env.config';

const {
    NODE_ENV,

    API_GATEWAY_PORT,

    WEBSOCKET_PORT,

    RMQ_DISTRIBUTOR_HOST,
    RMQ_DISTRIBUTOR_PORT,

    USERS_DB_HOST,
    USERS_DB_PORT,
    USERS_DB_NAME,
    USERS_DB_USER,
    USERS_DB_PASSWORD

} = getEnv(envSchema);

export {
    NODE_ENV,

    API_GATEWAY_PORT,

    WEBSOCKET_PORT,

    RMQ_DISTRIBUTOR_HOST,
    RMQ_DISTRIBUTOR_PORT,

    USERS_DB_HOST,
    USERS_DB_PORT,
    USERS_DB_NAME,
    USERS_DB_USER,
    USERS_DB_PASSWORD
};
