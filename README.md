<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Descripción

Este repositorio es un ejemplo del articulo:  
[Microservices with TypeScript, gRPC, API Gateway, and Authentication | by Kevin Vogel](https://levelup.gitconnected.com/nestjs-microservices-with-grpc-api-gateway-and-authentication-part-1-2-650009c03686)

Descargar los repositorios en el orden siguiente:

## Repositorios

- https://github.com/carlosgtz8/grpc-nest-proto - Repositorio Proto Compartido
- https://github.com/carlosgtz8/gprc-nest-api-gateway - API Gateway (HTTP)
- https://github.com/carlosgtz8/grpc-nest-auth-svc - Authentication SVC (gRPC)
- https://github.com/carlosgtz8/grpc-nest-product-svc - Product SVC (gRPC)
- https://github.com/carlosgtz8/grpc-nest-order-svc - Order SVC (gRPC)

## Instalación

```bash
$ npm install
$ npm run proto:install
# si npm run proto:install no funciona ejecutar la siguiente línea
$ npm run proto:install-local
$ npm run proto:all
```

## Ejecutar app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Autor

- [Kevin Vogel](https://medium.com/@hellokevinvogel)
