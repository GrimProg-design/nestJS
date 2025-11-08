import { Module } from '@nestjs/common';
import { ScopeService } from './scope.service';
import { ScopeController } from './scope.controller';

@Module({
  providers: [ScopeService],
  controllers: [ScopeController],
})
export class ScopeModule {}
