import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private users: User[] = [{ id: 1, name: 'Ilia', last_name: 'vavilov' }];

  findAll(): User[] {
    return this.users;
  }
}
