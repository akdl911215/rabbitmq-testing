import { AppService } from './app.service';
import { ClientRMQ } from '@nestjs/microservices';
export declare class AppController {
    private readonly appService;
    private readonly client;
    constructor(appService: AppService, client: ClientRMQ);
    getHello(): string;
    testRmq(): import("rxjs").Observable<any>;
}
