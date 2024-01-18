import { Controller, Get, HttpStatus } from "@nestjs/common";
import { RoleService } from "./role.service";
import { Response } from "src/utils/response.type";

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
}