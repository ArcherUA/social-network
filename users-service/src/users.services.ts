import {Inject, Injectable, UnauthorizedException} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";
import {InjectRepository} from "@nestjs/typeorm";
import {Md5} from 'md5-typescript';
import {Repository} from 'typeorm';

import {User} from "./common/entities/users.entity";
import {TokenService} from './token/token.service';

@Injectable()
export class UsersService {

  private readonly EMAIL_ALREADY_REGISTER = 'Email is already registered';
  private readonly INVALID_USER_ID = 'Invalid user id';
  private readonly INVALID_EMAIL = 'Invalid email';
  private readonly INVALID_PAS_EMAIL = 'Invalid password or email';

  public constructor(
    @Inject('USERS_SERVICE') private readonly rmqClient: ClientProxy,
    @InjectRepository(User)
    protected readonly userRepository: Repository<User>,
    protected readonly tokenService: TokenService,
  ) {
  };

  async register(user) {
    try {
      const newUser = new User(user);
      newUser.password = Md5.init(user.password);

      const candidate = await this.userRepository.findOne({
        where: {
          email: user.email
        }
      });
      if (!candidate) {
        return await this.userRepository.save(newUser);
      }
      return this.EMAIL_ALREADY_REGISTER;
    } catch (e) {
      console.log(e);
    }
  }

  async findOneByEmail(email) {
    const user = await this.userRepository.findOne({
      where: {
        email: email
      }
    })
    if (user) {
      return user
    }
    return this.INVALID_EMAIL
  }

  async getUser(id: string) {
    return await this.userRepository.findOne(id);
  }

  async updateUserData(user) {
    const verifyUser = await this.userRepository.findOne(user.id);
    if (verifyUser) {
      const candidate = {...user};
      return await this.userRepository.update(user.id, candidate);
    }
    return this.INVALID_USER_ID;
  }

  async deleteUser(id: string) {
    return await this.userRepository.delete(id);
  }

  async loginUser(email, password) {
    const verifyUser = await this.userRepository.findOne({
      where: {
        email: email,
      }
    })
    if (!verifyUser) {
      throw new UnauthorizedException(this.INVALID_PAS_EMAIL)
    };
    if (!(Md5.init(password) === verifyUser.password)) {
      throw new UnauthorizedException(this.INVALID_PAS_EMAIL)
    };
    return this.tokenService.createToken(verifyUser.id.toString(), email);
  }
}