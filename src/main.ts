import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.moule';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('nest')
    .setDescription('Документация REST API')
    .setVersion('1.0.0')
    .setContact('Evgenii', '', 'jenyaz862@gmail.com')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/docs', app, document);

  await app.listen(PORT, () => {
    console.log('Server start on port:', PORT);
  });
}

start();
