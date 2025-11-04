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
    {
      provide: 'ASYNC_CONNECTION',
      useFactory: async () => {
        console.log('connecting...');
        const connection = await new Promise((resolve) => {
          setTimeout(
            () => resolve({ status: 'connected', time: new Date() }),
            1000,
          );
        });
        console.log('connected!');
        return connection;
      },
    },
  ],
})
export class UsersModule {}
