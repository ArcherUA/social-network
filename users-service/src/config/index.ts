import { getEnv } from '../commmon/utils/get-env';
import { envSchema } from './required-env.config';

const {
    NODE_ENV,

    API_GATEWAY_PORT,
    API_HOST,

    WEBSOCKET_PORT,

    RMQ_DISTRIBUTOR_HOST,
    RMQ_DISTRIBUTOR_PORT,

    MEDIA_STORAGE_PATH,

} = getEnv(envSchema);

export {
    NODE_ENV,

    API_GATEWAY_PORT,
    API_HOST,

    WEBSOCKET_PORT,

    RMQ_DISTRIBUTOR_HOST,
    RMQ_DISTRIBUTOR_PORT,

    MEDIA_STORAGE_PATH,
};
