import {Inject, Injectable} from "@nestjs/common";
import {UsersCommand} from "../../../common/enums/users.command.enums";
import {ClientProxy} from '@nestjs/microservices';
import {RegisterUserDto} from "../dto/register-user.dto";


@Injectable()
export class UsersService {

  public constructor(
    @Inject('USERS_SERVICE') private readonly rmqClient: ClientProxy) {
  };

  register(user) {
    const pattern = {cmd: UsersCommand.REGISTER_NEW_USER};
    return this.rmqClient
      .send(pattern, user);
  };

  async getUser(id: string) {
    const pattern = {cmd: UsersCommand.GET_USER};
    return this.rmqClient
      .send(pattern, id);
  };

  async updateUserData(user) {
    const pattern = {cmd: UsersCommand.UPDATE_USER_DATA};
    return this.rmqClient
      .send(pattern, user);
  };

  async deleteUser(id: string) {
    const pattern = {cmd: UsersCommand.DELETE_USER};
    return this.rmqClient
      .send(pattern, id);
  };
  async loginUser(email,password) {
    const pattern = {cmd: UsersCommand.LOGIN_USER};
    return this.rmqClient
      .send(pattern,{email,password})
  }
}