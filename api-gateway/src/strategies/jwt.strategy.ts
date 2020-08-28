import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { TokenCommand } from '../common/enums/token.messages.enums';
import { JWT_SECRET } from '../config/index';
import { UsersService } from '../modules/api/users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWT_SECRET,
    });
  }

  async validate(payload) {
    const user = await this.usersService.findOneByEmail(payload.email);
    if (!user) {
      throw new UnauthorizedException(TokenCommand.INVALID_TOKEN);
    }
    return user;
  }
}
