import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import type { DynamicModuleOptions } from './dynamic-module.interface';

@Injectable()
export class DynamicModuleService implements OnModuleInit {
  constructor(
    @Inject('CUSTOM_OPTION') private readonly options: DynamicModuleOptions,
  ) {}

  onModuleInit() {
    console.log(
      `[CustomServise] onModuleInit: prefix - ${this.options.prefix}`,
    );
  }

  getMessage(name: string) {
    return `${this.options.prefix}: Hello ${name}`;
  }
}
