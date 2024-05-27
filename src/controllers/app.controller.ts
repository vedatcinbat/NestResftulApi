import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello/:name')
  printName(): string {
    return this.appService.printName('Vedat');
  }

  @Get('/mes')
  getMes(): string {
    return 'Merhaba';
  }
}

