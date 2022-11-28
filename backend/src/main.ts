import { NestFactory } from '@nestjs/core';
import { AppModule } from '@src/core/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  await app.listen(5001);
}
bootstrap();
