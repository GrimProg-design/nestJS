import { Controller, Get } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll(): User[] {
    return this.usersService.findAll();
  }

  @Get('default')
  findOne() {
    return this.usersService.findOne();
  }

  @Get('time')
  showDate() {
    return this.usersService.getGreeting();
  }

  @Get('example')
  example() {
    return this.usersService.example();
  }
}
