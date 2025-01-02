import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LoveCodeService } from './love-code.service';
import { CreateLoveCodeDto } from './dto/create-love-code.dto';
import { UpdateLoveCodeDto } from './dto/update-love-code.dto';

@Controller('love-code')
export class LoveCodeController {
  constructor(private readonly loveCodeService: LoveCodeService) {}

  @Post()
  async create(@Body() createLoveCodeDto: CreateLoveCodeDto) {
    return this.loveCodeService.create(createLoveCodeDto);
  }

  @Get()
  findAll() {
    return this.loveCodeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loveCodeService.findOne(+id);
  }

  @Patch()
  update(@Body() updateLoveCodeDto: UpdateLoveCodeDto) {
    return this.loveCodeService.update(updateLoveCodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loveCodeService.remove(+id);
  }
}
