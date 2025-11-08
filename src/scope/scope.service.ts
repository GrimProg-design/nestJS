import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class ScopeService {
  private readonly id = Math.random();

  getId() {
    return this.id;
  }
}
