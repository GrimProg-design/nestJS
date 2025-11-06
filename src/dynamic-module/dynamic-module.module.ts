import { Module } from '@nestjs/common';
import { DynamicModuleService } from './dynamic-module.service';
import { DynamicModuleController } from './dynamic-module.controller';

@Module({
  providers: [DynamicModuleService],
  controllers: [DynamicModuleController]
})
export class DynamicModuleModule {}
