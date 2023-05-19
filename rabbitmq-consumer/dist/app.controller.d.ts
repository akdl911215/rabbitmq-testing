import { AppService } from './app.service';
import { RmqContext } from '@nestjs/microservices';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    readMessage(data: any, context: RmqContext): void;
    getNotifications(data: any, context: RmqContext): void;
    getGreetingMessage(name: string): string;
    getGreetingMessageAysnc(name: string): Promise<string>;
    handleBookCreatedEvent(data: Record<string, unknown>): Promise<void>;
}
