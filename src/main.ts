import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  try {
    const microservice = app.connectMicroservice({
      transport: Transport.MQTT,
      options: {
        url: process.env.MQTT_URL,
        clientId: process.env.MQTT_CLIENT_ID,
        rejectUnauthorized: false,
        clean: true,
      },
    })
    if (!!microservice) {
      await app.startAllMicroservices()
    }
  } catch (error) {
    console.error('Error when start microservice', error)
  }
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
