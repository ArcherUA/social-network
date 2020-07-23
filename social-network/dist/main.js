"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("./config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: {
            origin: true,
            allowedHeaders: [
                'Origin',
                'Access-Control-Request-Method',
                'Access-Control-Allow-Origin',
                'Accept',
                'Cache-Control',
                'Content-Type',
                'Access-Control-Allow-Credentials',
                'Authorization',
            ],
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
            credentials: true,
        },
    });
    app.setGlobalPrefix('/api/v1');
    await app.listen(parseInt(config_1.GATEWAY_PORT, 10));
}
bootstrap();
//# sourceMappingURL=main.js.map