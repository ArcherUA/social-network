import * as Joi from 'joi';

export const envSchema: Joi.ObjectSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid(['development', 'production', 'local', 'debug'])
    .required(),

  GATEWAY_PORT: Joi.number().default(3010),
  GATEWAY_HOST: Joi.string().default('convertor_gateway'),

  WEBSOCKET_PORT: Joi.number().default(3011),

  NETWORK_DB_HOST: Joi.string().default('network_db'),
  NETWORK_DB_PORT: Joi.number().default(5634),
  NETWORK_DB_NAME: Joi.string().default('network_db'),
  NETWORK_DB_USER: Joi.string().default('root'),
  NETWORK_DB_PASSWORD: Joi.string().default('root'),
  EVENTS_ROOM: Joi.string().default('events'),
  CHUNKS_ROOM: Joi.string().default('chunks'),
  ENCODE_ROOM: Joi.string().default('encode'),
  TASK_ROOM: Joi.string().default('task'),
  GATEWAY_PROTOCOL: Joi.string().default('http://'),
  MIN_INSTANCE_MEMORY_PERCENT: Joi.number().default(2),
  MIN_INSTANCE_CPU_PERCENT: Joi.number().default(10),
  NFS_ROOT: Joi.string().default('/var/www/media'),
  CHUNK_LENGTH_SEC: Joi.number().default(20),
});
