import * as Joi from 'joi';

export const envSchema: Joi.ObjectSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid(['development', 'production', 'local', 'debug'])
    .required(),

  API_GATEWAY_PORT: Joi.number().default(3001),
  API_HOST: Joi.string().default('api'),

  WEBSOCKET_PORT: Joi.number().default(3002),

  RMQ_DISTRIBUTOR_HOST: Joi.string().default('rabbitmq_server'),
  RMQ_DISTRIBUTOR_PORT: Joi.number().default(5672),
  MEDIA_STORAGE_PATH: Joi.string(),

  USERS_DB_HOST: Joi.string().default('users_db'),
  USERS_DB_PORT: Joi.number().default(40548),
  USERS_DB_NAME: Joi.string().default('users_db'),
  USERS_DB_USER: Joi.string().default('root'),
  USERS_DB_PASSWORD: Joi.string().default('root'),

  RABBITMQ_USERNAME: Joi.string().default('astra_user'),
  RABBITMQ_PASSWORD: Joi.string().default('astra_password'),

  JWT_SECRET: Joi.string(),
  EXPIRES_IN: Joi.string()
});
