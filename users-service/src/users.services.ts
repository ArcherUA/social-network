import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";
import {InjectRepository} from "@nestjs/typeorm";

import {Repository} from 'typeorm';

import {User} from "./common/entities/users.entity";

@Injectable()
export class UsersService {

  public constructor(
    @Inject('USERS_SERVICE') private readonly rmqClient: ClientProxy,
    @InjectRepository(User)
    protected readonly userRepository: Repository<User>,
  ) {
  }

  async register(user) {
    const newUser = new User(user)
    const candidate = await this.userRepository.findOne({
      where: {
        email: newUser.email
      }
    })
    if (!candidate) {
      return await this.userRepository.save(newUser);
    }
    return 'Email is already registered'
  }

  async getUser(id) {
    return await this.userRepository.findOne(id)
  }

  async updateUserData() {
    return null;
  }

  async deleteUser(id) {
    return await this.userRepository.delete(id)
  }
}