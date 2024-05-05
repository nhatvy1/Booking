import { IsNotEmpty } from 'class-validator'

export class CreateRoomTypeDto {
	@IsNotEmpty()
	description: string
}
