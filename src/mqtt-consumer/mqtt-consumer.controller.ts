import { Controller, Logger } from '@nestjs/common';
import { EventPattern, Payload, Ctx } from '@nestjs/microservices';
import { MessageService } from 'src/message/message.service';

@Controller('mqtt-consumer')
export class MqttConsumerController {
  constructor(private readonly messageService: MessageService) {}

  @EventPattern(process.env.MQTT_TOPIC + '/+')
  async topicHandler(@Payload() data, @Ctx() context) {
    const loveCode = context.getTopic().split('/')[2];
    Logger.log(`Love code: ${loveCode}`);
    const { message, sender, time } = data;
    Logger.log(`Message: ${message}`);
    Logger.log(`Sender: ${sender}`);
    Logger.log(`Time: ${time}`);
    await this.messageService.create({ message, sender, time, loveCode });
  }
}
