import {Inject, Injectable} from "@nestjs/common";
import {Observable} from "rxjs";
import {UsersCommand} from "../../../common/enums/users.command.enums";
import {Client, ClientProxy, Transport} from '@nestjs/microservices';
import {RABBITMQ_PASSWORD, RABBITMQ_USERNAME, RMQ_DISTRIBUTOR_HOST, RMQ_DISTRIBUTOR_PORT} from "../../../config";


@Injectable()
export class UsersService {

  public constructor(@Inject('USERS_SERVICE') private readonly rmqClient: ClientProxy) {
  }

  register() {
    const pattern = {cmd: UsersCommand.REGISTER_NEW_USER};
    const payload = [1, 2, 3];
    return this.rmqClient
      .send(pattern, payload)
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