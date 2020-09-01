import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { UsersCommand } from '../../../common/enums/users.command.enums';
import { PostsCommand } from '../../../common/enums/posts.command.enums';

@Injectable()
export class UsersService {
  public constructor(
    @Inject('USERS_SERVICE') private readonly rmqClient: ClientProxy,
  ) {}

  register(user) {
    return this.rmqClient.send({ cmd: UsersCommand.REGISTER_NEW_USER }, user);
  }

  async getUser(id: string) {
    return this.rmqClient.send({ cmd: UsersCommand.GET_USER }, id);
  }

  async updateUserData(user) {
    return this.rmqClient.send({ cmd: UsersCommand.UPDATE_USER_DATA }, user);
  }

  async deleteUser(id: string) {
    return this.rmqClient.send({ cmd: UsersCommand.DELETE_USER }, id);
  }

  async loginUser(userData) {
    return this.rmqClient.send({ cmd: UsersCommand.LOGIN_USER }, userData);
  }

  async findOneByEmail(email) {
    return this.rmqClient.send(
      { cmd: UsersCommand.FIND_ONE_BY_EMAIL },
      { email },
    );
  }

  async findUsersByArrayId(arrayUserId) {
    return this.rmqClient.send(
      { cmd: PostsCommand.SEND_ARRAY_USER_ID },
      arrayUserId,
    );
  }
}
