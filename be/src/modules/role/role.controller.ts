import { Body, Controller, Get, HttpStatus, Post, Res } from "@nestjs/common";
import { RoleService } from "./role.service";
import { Response } from "src/utils/response.type";
import { CreateRoleDto } from "./dto/create.role.dto";

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get('init-role')
  async initRole() {
    try {
      const result = await this.roleService.initRole()

      return Response({
        message: 'Init role success',
        statusCode: HttpStatus.OK
      })
    } catch(e) {
      throw e
    }
  }

  @Post()
  async createRole(@Body() body: CreateRoleDto) {
    try {
      const result = await this.roleService.createRole(body)
      return Response({
        message: 'Success',
        statusCode: HttpStatus.OK,
        result
      })
    } catch(e) {
      throw e
    }
  }
}