import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { DataSource } from 'typeorm';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('Bootstrap');

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.enableVersioning();

  const dataSource = app.get(DataSource);

  // TODO uncomment this line to enable automatic database migration
  // await migrateDatabase(dataSource, logger);

  const config = new DocumentBuilder()
    .setTitle('Book store')
    .setDescription('The book store application')
    .addBearerAuth({
      description: `Enter your access token in the following format: Bearer <JWT>`,
      name: 'Authorization',
      bearerFormat: 'Bearer',
      scheme: 'Bearer',
      type: 'http',
      in: 'Header',
    })
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  logger.log(`Listening on http://localhost:3000`);
  await app.listen(3000);
}
bootstrap();
