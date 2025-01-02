import { Module } from '@nestjs/common';
import { MqttConsumerController } from './mqtt-consumer.controller';
import { MessageModule } from 'src/message/message.module';

@Module({
  controllers: [MqttConsumerController],
  imports: [MessageModule],
})
export class MqttConsumerModule {}
