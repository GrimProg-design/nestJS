import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { defaultUser } from './provider/defaultUsers.provider';
import { greeting } from './provider/greeting.provider';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    defaultUser,
    {
      provide: 'GREETING',
      useFactory: () => `Hello! Current date is ${greeting()}`,
    },
    {
      provide: 'userService',
      useExisting: UsersService,
    },
  ],
})
export class UsersModule {}
