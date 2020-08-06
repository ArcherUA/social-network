import {getEnv} from '../common/utils/get-env';
import {envSchema} from './required-env.config';

const {
  NODE_ENV,

  API_GATEWAY_PORT,
  API_HOST,

  WEBSOCKET_PORT,

  RMQ_DISTRIBUTOR_HOST,
  RMQ_DISTRIBUTOR_PORT,

  RABBITMQ_USERNAME,
  RABBITMQ_PASSWORD,

} = getEnv(envSchema);

export {
  NODE_ENV,

  API_GATEWAY_PORT,
  API_HOST,

  WEBSOCKET_PORT,

  RMQ_DISTRIBUTOR_HOST,
  RMQ_DISTRIBUTOR_PORT,

  RABBITMQ_USERNAME,
  RABBITMQ_PASSWORD,
};
