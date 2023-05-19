import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

// ClientsModule.register([
//   {
//     name: 'MATH_SERVICE',
//     transport: Transport.RMQ,
//     options: {
//       urls: ['amqp://localhost:5672'],
//       queue: 'jung_queue',
//       queueOptions: {
//         durable: false,
//       },
//     },
//   },
// ]),

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
