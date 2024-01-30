import { IsEmpty, IsNotEmpty } from "class-validator";
import { actionEnum } from "../permission.entity";
import { Role } from "src/modules/role/role.entity";


export class CreatePermissioDto {
    @IsNotEmpty({ message: 'Tên quyền không được để trống'})
    subject: string

    @IsEmpty({ message: 'Hành động không hợp lệ'})
    action: actionEnum

    @IsEmpty({ message: 'Vui lòng thử lại sau' })
    role: Role[]
}