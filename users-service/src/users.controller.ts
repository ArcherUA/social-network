import {Controller, Inject, Injectable} from '@nestjs/common';

import {ApiUseTags} from '@nestjs/swagger';
import {ClientProxy, MessagePattern, Payload} from '@nestjs/microservices';

import {UsersCommand} from './common/enums/users.command.enums';
import {UsersService} from "./users.services";

@Injectable()
@Controller()
@ApiUseTags('users')
export class UsersController {

  constructor(
    private readonly usersService: UsersService,
    @Inject('USERS_SERVICE') private readonly rmqClient: ClientProxy,
  ) {
  }

  @MessagePattern({cmd: UsersCommand.REGISTER_NEW_USER})
  async register(@Payload() user) {
    return await this.usersService.register(user);
  };

  @MessagePattern({cmd: UsersCommand.GET_USER})
  async getUser(@Payload() id: string) {
    return await this.usersService.getUser(id);
  };

  @MessagePattern({cmd: UsersCommand.UPDATE_USER_DATA})
  async updateUserData(@Payload() user) {
    return await this.usersService.updateUserData(user);
  };

  @MessagePattern({cmd: UsersCommand.DELETE_USER})
  async deleteUser(@Payload() id: string) {
    return await this.usersService.deleteUser(id);
  };
  @MessagePattern({cmd: UsersCommand.LOGIN_USER})
  async loginUser(@Payload() {email,password}) {
    return await this.usersService.loginUser(email, password)
  }
  @MessagePattern({cmd: UsersCommand.FIND_ONE_BY_EMAIL})
  async findOneByEmail(@Payload() {email}) {
    return await this.usersService.findOneByEmail(email)
  }
}
