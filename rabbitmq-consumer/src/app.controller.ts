import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {
  Ctx,
  EventPattern,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('medium.rock')
  readMessage(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    console.log('data: ', data);
    channel.ack(originalMsg);
  }

  @MessagePattern('notifications')
  getNotifications(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    console.log('channel : ', channel);

    const originalMsg = context.getPattern();
    console.log('originalMsg : ', originalMsg);

    channel.ack(originalMsg);
  }

  @MessagePattern({ cmd: 'greeting' })
  getGreetingMessage(name: string): string {
    return `Hello ${name}`;
  }

  @MessagePattern({ cmd: 'greeting-async' })
  async getGreetingMessageAysnc(name: string): Promise<string> {
    return `Hello ${name} Async`;
  }

  @EventPattern('book-created')
  async handleBookCreatedEvent(data: Record<string, unknown>) {
    console.log(data);
  }
}

// https://progressivecoder.com/how-to-create-a-nestjs-rabbitmq-microservice/
// http://localhost:15672/#/
