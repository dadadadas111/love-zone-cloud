import { PartialType } from '@nestjs/mapped-types';
import { CreateLoveCodeDto } from './create-love-code.dto';

export class UpdateLoveCodeDto extends PartialType(CreateLoveCodeDto) {}
