import { Controller, Get } from '@nestjs/common';
import { DynamicModuleService } from './dynamic-module.service';

@Controller('dynamic-module')
export class DynamicModuleController {
  constructor(private readonly customDynamicModule: DynamicModuleService) {}

  @Get()
  hello() {
    const msg = this.customDynamicModule.getMessage('Ilia');
    console.log('[AppController] hello():', msg);
    return msg;
  }
}
