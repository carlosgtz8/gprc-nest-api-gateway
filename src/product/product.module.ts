import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ProductController } from './product.controller';
import { PRODUCT_SERVICE_NAME, PRODUCT_PACKAGE_NAME } from './product.pb';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        imports: [ConfigModule],
        inject: [ConfigService],
        name: PRODUCT_SERVICE_NAME,
        useFactory: (configService: ConfigService) => {
          return {
            transport: Transport.GRPC,
            options: {
              url: configService.get('PRODUCT_SERVICE_URL'),
              package: PRODUCT_PACKAGE_NAME,
              protoPath: 'node_modules/grpc-nest-proto/proto/product.proto',
            },
          };
        },
      },
    ]),
  ],
  controllers: [ProductController],
})
export class ProductModule {}
