/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { regexHelper } from 'src/utils/regex.helper';

export class CreateUserDto {

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Matches(regexHelper.password, {message: 'A senha deve ser de alta complexidade!'})
  password: string;

  @IsNotEmpty()
  profile: string;
}
