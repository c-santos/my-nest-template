import { NestFactory } from '@nestjs/core';
import { AppModule } from './infrastructure/modules/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('i2i-ms-debit-credit')
    .setDescription('Project i2i Microservice Debit-Credit API')
    .setVersion('1.0')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/api', app, swaggerDocument, {
    useGlobalPrefix: true,
  });

  await app.listen(3000);
}

bootstrap();
