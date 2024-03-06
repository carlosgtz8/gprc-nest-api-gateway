import { Global, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AUTH_PACKAGE_NAME, AUTH_SERVICE_NAME } from './auth.pb';

@Global()
@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        imports: [ConfigModule],
        inject: [ConfigService],
        name: AUTH_SERVICE_NAME,
        useFactory: (configService: ConfigService) => {
          return {
            transport: Transport.GRPC,
            options: {
              url: configService.get('AUTH_SERVICE_URL'),
              package: AUTH_PACKAGE_NAME,
              protoPath: 'node_modules/grpc-nest-proto/proto/auth.proto',
            },
          };
        },
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
