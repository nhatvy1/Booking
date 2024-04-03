import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put, Query, Res, UseGuards } from "@nestjs/common";
import { RoleService } from "./role.service";
import { Response } from "src/utils/response.type";
import { CreateRoleDto } from "./dto/create.role.dto";
import { JwtAuthGuard } from "src/guards/jwt.auth.guard";

@Controller('role')
// @UseGuards(JwtAuthGuard)
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
  async createRole(@Body() createRoleDto: CreateRoleDto) {
    try {
      const result = await this.roleService.createRole(createRoleDto)
      return Response({
        message: 'Success',
        statusCode: HttpStatus.OK,
        result: createRoleDto
      })
    } catch(e) {
      throw e
    }
  }

  @Get(':id')
  async getRoleById(@Param('id', ParseIntPipe) id: number) {
    try {
      try {
        const result = await this.roleService.getRoleById(id)
        return Response({ 
          message: 'success',
          statusCode: HttpStatus.OK,
          result
        })
      } catch(e) {
        throw e
      }
    } catch(e){
      throw e
    }
  }

  @Put(':id')
  async updateRole(@Param('id')id: number, @Body() updateRole: any) {
    try {
      const result =  await this.roleService.updateRole(id, updateRole)
      return Response({
        message: 'success update role',
        statusCode: HttpStatus.OK,
        result
      })
    } catch(e) {
      throw e
    }
  }

  @Delete(':id')
  async deleteRoleById(@Param('id', ParseIntPipe) id: number) {
    const result = await this.roleService.deleteRoleId(id)

    return Response({
      message: 'success',
      statusCode: HttpStatus.OK,
      result
    })
  }
}