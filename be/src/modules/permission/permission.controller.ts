import { Body, Controller, Get, HttpStatus, Post, Put, UseGuards } from '@nestjs/common'
import { PermissionService } from './permission.service'
import { Response } from 'src/utils/response.type'
import { JwtAuthGuard } from 'src/guards/jwt.auth.guard'

@Controller('permission')
@UseGuards(JwtAuthGuard)
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Get()
  async getAllPermission() {
    const result = await this.permissionService.getPermissionByName('role')
    return Response({
      statusCode: HttpStatus.OK,
      message: 'Success',
      result
    })
  }
}
