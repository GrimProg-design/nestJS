import { Injectable } from '@nestjs/common';
import { User } from './interfaces/users.interface';

@Injectable()
export class UsersService {
  private data: User[] = [];

  setUser(user: User) {
    this.data.push(user);
    return `${user.name} успешно добавлен`;
  }

  findAll(): User[] {
    return this.data;
  }
}
