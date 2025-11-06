import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { ModulesService } from './modules/modules.service';
import { ModulesController } from './modules/modules.controller';
import { ModulesModule } from './modules/modules.module';
import { DynamicModuleModule } from './dynamic-module/dynamic-module.module';

@Module({
  imports: [CatsModule, UsersModule, ModulesModule, DynamicModuleModule],
  controllers: [AppController, ModulesController],
  providers: [AppService, ModulesService],
})
export class AppModule {}
