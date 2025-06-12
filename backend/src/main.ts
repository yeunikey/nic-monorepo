import { json, urlencoded } from 'express';

import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix('v1');
  app.use(json({ limit: '50mb' })); // увеличиваем лимит
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  app.useGlobalPipes(new ValidationPipe()); // <-- ОБЯЗАТЕЛЬНО!

  await app.listen(process.env.PORT ?? 3004);
}
bootstrap();
