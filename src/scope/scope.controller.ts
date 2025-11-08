import { Controller, Get } from '@nestjs/common';
import { ScopeService } from './scope.service';

@Controller('scope')
export class ScopeController {
  constructor(private readonly userId: ScopeService) {}

  @Get()
  getId() {
    return this.userId.getId();
  }
}
