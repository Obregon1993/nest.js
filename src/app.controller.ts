import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  newEndpoint() {
    return 'this is a test endpoint';
  }

  @Get('/route/')
  hello() {
    return 'this is a test endpoint';
  }
}
