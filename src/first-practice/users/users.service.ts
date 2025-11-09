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

  deleteUser(id: number) {
    const index = this.data.findIndex((user) => user.id === id);
    console.log(index);

    if (index === -1) {
      this.data.splice(index, 1);
      return 'Пользователь удален';
    } else {
      return 'Такого пользователя нету';
    }
  }
}
