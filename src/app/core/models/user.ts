import { IUser } from './iuser';

export class User implements IUser {
    id: number;
    token: string;
    name: {
        firstName: string,
        lastName: string
    };
    login: string;
    password: string;
}
