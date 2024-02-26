import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, Post, Put, Query, Res, UseGuards } from "@nestjs/common";
import { RoleService } from "./role.service";
import { Response } from "src/utils/response.type";
import { CreateRoleDto } from "./dto/create.role.dto";
import { JwtAuthGuard } from "src/guards/jwt.auth.guard";

@Controller('role')
@UseGuards(JwtAuthGuard)
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

  @Get()
  async getAllRole() {
    try {
      const result = await this.roleService.getAllRole()
      return Response({
        message: 'success',
        statusCode: HttpStatus.OK,
        result
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

  @Get()
  async getRoleBySlug(@Query('slug') slug: string) {
    try {
      const result = await this.roleService.getRoleByName(slug)
      return Response({
        message: 'Success',
        statusCode: HttpStatus.OK,
        result
      })
    } catch(e) {
      throw e
    }
  }

  @Put(':id')
  async updateRole(@Param('id', ParseIntPipe) id: number) {
    try {
      const result = await this.roleService.getRoleById(id)
      return Response({ 
        message: 'Sucess',
        statusCode: HttpStatus.OK,
        result
      })
    } catch(e) {
      throw e
    }
  }
}