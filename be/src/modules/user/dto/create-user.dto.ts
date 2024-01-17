import { IsEmail, IsNotEmpty, Max, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(100)
  readonly fullName: string

  @IsEmail()
  email: string

  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(100)
  readonly password: string
}
