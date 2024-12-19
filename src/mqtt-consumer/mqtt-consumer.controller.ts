import { Controller, Logger } from '@nestjs/common';
import { EventPattern, Payload, Ctx } from '@nestjs/microservices';

@Controller('mqtt-consumer')
export class MqttConsumerController {
    @EventPattern(process.env.MQTT_TOPIC + '/#')
      async topicHandler(@Payload() data, @Ctx() context) {
        Logger.log('Message from topic: ' + context.getTopic())
        Logger.log(data)
      }
}
