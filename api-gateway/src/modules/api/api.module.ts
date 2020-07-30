import { Module } from "@nestjs/common";

import { MessagesController, PostsController, UsersController } from  './controllers';
import { MessagesService,PostsService,UsersService } from './services';

@Module({
    imports: [],
    controllers: [
        MessagesController,
        PostsController,
        UsersController,
    ],
    providers: [
        MessagesService,
        PostsService,
        UsersService,
    ],
})
export class ApiModule {}
