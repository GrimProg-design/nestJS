import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('users-practice')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAll() {
    return this.usersService.findAll();
  }

  @Post('set-user')
  setUser(@Body() user: CreateUserDTO) {
    return this.usersService.setUser(user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    const numId = Number(id);
    return this.usersService.deleteUser(numId);
  }
}
