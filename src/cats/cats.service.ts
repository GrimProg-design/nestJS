import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { ModulesService } from 'src/modules/modules.service';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];
  constructor(private moduleServise: ModulesService) {}

  findAll(): Cat[] {
    console.log('hi from');
    return this.cats;
  }

  example() {
    return this.moduleServise.example();
  }
}
