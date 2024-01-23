import { Controller, Get, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'src/utils/response.type';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getListUsers() {
    const result = await this.userService.getListUsers()
    return Response({
      message: 'success',
      statusCode: HttpStatus.OK,
      result
    })
  }
}
