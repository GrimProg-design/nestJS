import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';

@Injectable({ scope: Scope.REQUEST })
export class ScopeService {
  private readonly id = Math.random();
  private readonly requesId: number;

  constructor(@Inject(REQUEST) private request: Request) {
    this.id = Math.floor(Math.random() * 10000);
    console.log(`[ScopeServise] новый сервис создан для запроса: ${this.id}`);
  }

  getId() {
    return this.id;
  }

  getRequestId() {
    return this.id;
  }

  getRequestURL() {
    return this.request.url;
  }
}
