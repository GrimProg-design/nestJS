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
    return { message: 'Пользователь добавлен', user };
  }

  findAll(): User[] {
    return this.data;
  }

  deleteUser(id: number) {
    const userIndex = this.data.findIndex((user) => user.id === id);
    console.log(userIndex);

    if (userIndex !== -1) {
      this.data.splice(userIndex, 1);
      return { message: 'Пользователь удален' };
    } else {
      return { message: 'Такого пользователя нету' };
    }
  }
}
