/* eslint-disable prettier/prettier */
import { Matches } from "class-validator";
import { regexHelper } from 'src/utils/regex.helper';

/* eslint-disable prettier/prettier */
export class UpdateUserPasswordDto {
  
  @Matches(regexHelper.password, {message: 'A senha deve ser de alta complexidade!'})
  password: string;

}