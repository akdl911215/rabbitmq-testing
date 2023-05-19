import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientRMQ } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('GREETING_SERVICE') private readonly client: ClientRMQ,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('rmq-test')
  testRmq() {
    return this.client.emit('medium.rock', {
      bookName: 'The Way Of Kings',
      author: 'Brandon Sanderson',
      data: new Date().toString(),
    });
  }
}
