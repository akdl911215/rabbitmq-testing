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
    const data = {
      type: 'object',
      properties: {
        Header: {
          type: 'object',
          properties: {
            HttpStatusCode: {
              type: 'integer',
            },
          },
          required: ['HttpStatusCode'],
        },
        Body: {
          type: 'object',
          properties: {
            Message: {
              type: 'string',
            },
          },
          required: ['Message'],
        },
      },
      required: ['Header', 'Body'],
    };
    return this.client.emit('medium.rock', data);
  }
}
