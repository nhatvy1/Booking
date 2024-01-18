import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";


export class LoginDto {
  @IsEmail()
  email: string

  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(100)
  password: string
}