import { Injectable } from '@nestjs/common';
import { User } from './interfaces/users.interface';

@Injectable()
export class UsersService {
  private data: User[] = [
    {
      id: 1,
      name: 'Egot',
      last_name: 'Vavilov',
    },
  ];

  setUser(user: User) {
    this.data.push(user);
    return `${user.name} успешно добавлен`;
  }

  findAll(): User[] {
    return this.data;
  }

  deleteUser(id: number) {
    const userIndex = this.data.findIndex((user) => user.id === id);

    if (userIndex !== -1) {
      this.data.splice(userIndex, 1);
      return 'Пользователь удален';
    } else {
      return 'Такого пользователя нету';
    }
  }
}
