import { Injectable } from "@nestjs/common";
import {Observable} from "rxjs";
import { UsersCommand } from "../../../common/enums/users.command.enums";
import { ClientProxy } from '@nestjs/microservices';


@Injectable()
export class UsersService {

    client: ClientProxy;

    async register():Promise<any> {

            const pattern = { cmd: UsersCommand.REGISTRATION_NEW_USER };
            const payload = [1, 2, 3];
            return this.client
                .send(pattern, payload)
                .toPromise()
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