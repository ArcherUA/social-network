import { Module } from '@nestjs/common';
import { UsersService, PostsService, MessagesService } from './services/index'
import { UsersController, PostsController, MessagesController} from './controllers/index'

@Module({
  imports: [],
  controllers: [
    MessagesController,
    UsersController,
    PostsController,
  ],
  providers: [
    UsersService,
    PostsService,
    MessagesService,
  ],
})
export class AppModule {}
