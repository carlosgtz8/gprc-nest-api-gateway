import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OrderController } from './order.controller';
import { ORDER_PACKAGE_NAME, ORDER_SERVICE_NAME } from './order.pb';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        imports: [ConfigModule],
        inject: [ConfigService],
        name: ORDER_SERVICE_NAME,
        useFactory: (configService: ConfigService) => {
          return {
            transport: Transport.GRPC,
            options: {
              url: configService.get('ORDER_SERVICE_URL'),
              package: ORDER_PACKAGE_NAME,
              protoPath: 'node_modules/grpc-nest-proto/proto/order.proto',
            },
          };
        },
      },
    ]),
  ],
  controllers: [OrderController],
})
export class OrderModule {}
