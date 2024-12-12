import { Module } from '@nestjs/common';
import { LoveCodeService } from './love-code.service';

@Module({
  providers: [LoveCodeService]
})
export class LoveCodeModule {}
