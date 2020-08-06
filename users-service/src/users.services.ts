import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";
import {stream} from "winston";

@Injectable()
export class UsersService {

  public constructor(@Inject('USERS_SERVICE') private readonly rmqClient: ClientProxy) {
  }

  async register(payload) {
    console.log('aaa')
    return 'asdasd'
  }

  async getUser() {
    return null;
  }

  async updateUserData() {
    return null;
  }

  async deleteUser() {
    return null;
  }
}