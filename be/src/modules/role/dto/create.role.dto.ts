import { IsNotEmpty } from 'class-validator'

export class CreateRoleDto {
  @IsNotEmpty({ message: 'Tên quyền không được để trống' })
  name: string

  @IsNotEmpty({ message: 'Ký hiệu quyền được để trống' })
  slug: string
}
