import { Module } from '@nestjs/common';
import { LoveCodeService } from './love-code.service';
import { LoveCodeController } from './love-code.controller';

@Module({
  controllers: [LoveCodeController],
  providers: [LoveCodeService],
})
export class LoveCodeModule {}
