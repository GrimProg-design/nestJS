import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { defaultUser } from './provider/default-users.provider';

@Module({
  controllers: [UsersController],
  providers: [UsersService, defaultUser],
})
export class UsersModule {}
