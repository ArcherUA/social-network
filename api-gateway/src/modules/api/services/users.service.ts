import {Inject, Injectable} from "@nestjs/common";
import {UsersCommand} from "../../../common/enums/users.command.enums";
import {ClientProxy} from '@nestjs/microservices';


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

  async getUser(id) {
    const pattern = {cmd: UsersCommand.GET_USER};
    return this.rmqClient
      .send(pattern, id);
  };

  async updateUserData() {
    return undefined;
  };

  async deleteUser(id) {
    const pattern = {cmd: UsersCommand.DELETE_USER};
    return this.rmqClient
      .send(pattern, id);
  };
}