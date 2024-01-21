import { Controller, Get, HttpStatus } from '@nestjs/common'
import { PermissionService } from './permission.service'
import { Response } from 'src/utils/response.type'

@Controller('permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Get()
  async getDemo() {
    const result = await this.permissionService.getPermissionByName('role')
    return Response({
      statusCode: HttpStatus.OK,
      message: 'Success',
      result
    })
  }
}
