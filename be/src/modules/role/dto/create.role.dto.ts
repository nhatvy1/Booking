import { IsEmpty, IsNotEmpty, isNotEmpty } from 'class-validator'

export class CreateRoleDto {
  @IsNotEmpty({ message: 'Tên vai trò không được để trống' })
  name: string

  @IsNotEmpty({ message: 'Ký hiệu vai trò được để trống' })
  slug: string

  @IsNotEmpty({ message: 'Phần quyền không được để trống' })
  permissions: { [key: string]: string[] }
}
