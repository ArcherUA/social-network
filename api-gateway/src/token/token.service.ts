import {Injectable} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import {EXPIRES_IN, JWT_SECRET} from '../config';

@Injectable()
export class TokenService {

  createToken(id: string, email: string) {
    const token = jwt.sign({email, id}, JWT_SECRET, {expiresIn: EXPIRES_IN});
    return {
      expiresIn: EXPIRES_IN,
      accessToken: token,
    };
  };
};
