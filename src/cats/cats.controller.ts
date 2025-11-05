import { Controller, Get } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsServise: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsServise.findAll();
  }

  @Get('example')
  example() {
    return this.catsServise.example();
  }
}
