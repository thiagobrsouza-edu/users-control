import { IsEmail, IsEmpty, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  profile: string;
}
