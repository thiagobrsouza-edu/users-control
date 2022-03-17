import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsNumber()
  id: number;

  @IsNotEmpty()
  name?: string;

  @IsNotEmpty()
  @IsEmail()
  email?: string;

  @IsNotEmpty()
  password?: string;

  @IsNotEmpty()
  profile?: string;
}
