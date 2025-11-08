import { Controller, Get } from '@nestjs/common';
import { ScopeService } from './scope.service';

@Controller('scope')
export class ScopeController {
  constructor(private readonly scopeService: ScopeService) {}

  @Get()
  getId() {
    return this.scopeService.getId();
  }

  @Get('request')
  showRequestId() {
    return {
      id: this.scopeService.getRequestId(),
      url: this.scopeService.getRequestURL(),
    };
  }
}
