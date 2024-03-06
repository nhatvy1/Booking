import { IsEmpty, IsNotEmpty, isNotEmpty } from 'class-validator'

export class UpdateRoleDto {
  @IsNotEmpty({ message: "Tên vai trò không được để  trống"})
  name: string

  @IsNotEmpty({ message: 'Ký hiệu trên vai trò không trống'})
  slug: string

  @IsNotEmpty({ message: 'Quyền không được để trống' })
  permissions: { [key: string]: string[] }
}
