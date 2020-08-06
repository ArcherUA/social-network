import {Controller, Inject, Injectable} from '@nestjs/common';

import {ApiUseTags} from '@nestjs/swagger';
import {MessagePattern, ClientProxy} from '@nestjs/microservices';

import {UsersCommand} from './common/enums/users.command.enums';
import {UsersService} from "./users.services";

@Injectable()
@Controller()
@ApiUseTags('users')
export class UsersController {

  constructor(
    private readonly usersService: UsersService,
  ) {
  }

  @MessagePattern({cmd: UsersCommand.REGISTER_NEW_USER})
  async register(payload) {
    // console.log('kek is', UsersCommand.REGISTER_NEW_USER)
    return await this.usersService.register(payload);
  };

  @MessagePattern({cmd: UsersCommand.GET_USER})
  async getUser() {
    return await this.usersService.getUser();
  };

  @MessagePattern({cmd: UsersCommand.UPDATE_USER_DATA})
  async updateUserData() {
    return await this.usersService.updateUserData();
  };

  @MessagePattern({cmd: UsersCommand.DELETE_USER})
  async deleteUser() {
    return await this.usersService.deleteUser();
  };
}
