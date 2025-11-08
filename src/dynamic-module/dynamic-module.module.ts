import { DynamicModule, Module } from '@nestjs/common';
import { DynamicModuleService } from './dynamic-module.service';
import { DynamicModuleOptions } from './dynamic-module.interface';
import { DynamicModuleController } from './dynamic-module.controller';

@Module({})
export class DynamicModuleModule {
  static register(options: DynamicModuleOptions): DynamicModule {
    const optionsProvider = {
      provide: 'CUSTOM_OPTION',
      useValue: options,
    };

    return {
      module: DynamicModuleModule,
      providers: [optionsProvider, DynamicModuleService],
      controllers: [DynamicModuleController],
      exports: [DynamicModuleService],
    };
  }
}
