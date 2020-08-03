import * as Joi from 'joi';

export const envSchema: Joi.ObjectSchema = Joi.object({
    NODE_ENV: Joi.string()
        .valid(['development', 'production', 'local', 'debug'])
        .required(),

    API_PORT: Joi.number().default(3001),
    API_HOST: Joi.string().default('api'),

    WEBSOCKET_PORT: Joi.number().default(3002),

    RMQ_DISTRIBUTOR_HOST: Joi.string().default('rabbitmq_server'),
    RMQ_DISTRIBUTOR_PORT: Joi.number().default(5672),
    MEDIA_STORAGE_PATH: Joi.string(),
});
