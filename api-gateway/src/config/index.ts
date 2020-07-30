import { getEnv } from '../common/utils/get-env';
import { envSchema } from './required-env.config';

const {
    NODE_ENV,

    API_GATEWAY_PORT,
    API_HOST,

    WEBSOCKET_PORT,

    DISTRIBUTOR_HOST,
    DISTRIBUTOR_PORT,

    MEDIA_STORAGE_PATH,

} = getEnv(envSchema);

export {
    NODE_ENV,

    API_GATEWAY_PORT,
    API_HOST,

    WEBSOCKET_PORT,

    DISTRIBUTOR_HOST,
    DISTRIBUTOR_PORT,

    MEDIA_STORAGE_PATH,
};
