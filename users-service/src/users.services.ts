import {Injectable} from '@nestjs/common';

@Injectable()
export class UsersService {

    async register(login: string, email: string, password: string): Promise<void> {
        try {

        } catch (e) {

        }
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