import {Inject, Injectable} from "@nestjs/common";
import {UsersCommand} from "../../../common/enums/users.command.enums";
import {ClientProxy} from '@nestjs/microservices';


@Injectable()
export class UsersService {

  public constructor(@Inject('USERS_SERVICE') private readonly rmqClient: ClientProxy) {
  }

  register(user) {
    const pattern = {cmd: UsersCommand.REGISTER_NEW_USER};
    return this.rmqClient
      .send(pattern, user);
  }

  async getUser() {
    return undefined;
  }

  async updateUserData() {
    return undefined;
  }

  async deleteUser() {
    return undefined;
  }
}