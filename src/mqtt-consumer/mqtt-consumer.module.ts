import { Module } from '@nestjs/common';
import { MqttConsumerController } from './mqtt-consumer.controller';

@Module({
  controllers: [MqttConsumerController]
})
export class MqttConsumerModule {}
