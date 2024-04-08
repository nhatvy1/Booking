import { IsNotEmpty, MaxLength, MinLength } from 'class-validator'

export class UpdateUserDto {
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(100)
  readonly fullName: string

	status: number
}
