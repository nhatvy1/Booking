import { IsNotEmpty } from 'class-validator'

export class CreateRoleDto {
  @IsNotEmpty({ message: 'Tên vai trò không được để trống' })
  name: string

  @IsNotEmpty({ message: 'Ký hiệu vai trò được để trống' })
  slug: string
}
