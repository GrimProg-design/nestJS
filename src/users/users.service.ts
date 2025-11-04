import { Inject, Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'Ilia', last_name: 'vavilov' },
    { id: 2, name: 'Egor', last_name: 'Vavilov' },
  ];
  constructor(@Inject('defaultUser') private defaultUser: { name: string }) {}

  findAll(): User[] {
    return this.users;
  }

  findOne() {
    const user = this.users.find((u) => u.name === this.defaultUser.name);
    if (user) {
      return user.name;
    } else {
      return 'Пользователь не найден';
    }
  }
}
