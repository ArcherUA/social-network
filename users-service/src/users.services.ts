import {Injectable} from '@nestjs/common';

@Injectable()
export class UsersService {

    async register() {
        return console.log('kek')
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