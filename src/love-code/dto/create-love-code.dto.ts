import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateLoveCodeDto {
  @IsString()
  @IsNotEmpty()
  code: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
