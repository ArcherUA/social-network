import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";
import {InjectRepository} from "@nestjs/typeorm";

import {Repository} from 'typeorm';

import {User} from "./common/entities/users.entity";

@Injectable()
export class UsersService {

  public constructor(
    @Inject('USERS_SERVICE') private readonly rmqClient: ClientProxy,
    @InjectRepository(User) protected readonly userRepository: Repository<User>,
  ) {
  }

  async register(user) {
    const newUser = new User(user)
    // return this.userRepository.save(newUser);
    return console.log(newUser)
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