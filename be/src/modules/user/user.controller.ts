import { Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, UseGuards, } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'src/utils/response.type';
import { JwtAuthGuard } from 'src/guards/jwt.auth.guard';

@Controller('user')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getListUsers() {
    try {
      const result = await this.userService.getListUsers()
      return Response({
        message: 'success',
        statusCode: HttpStatus.OK,
        result
      })
    } catch(e) {
      throw e
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    try {
      const result = await this.userService.deleteUserById(id)
      return Response({
        message: 'success',
        statusCode: HttpStatus.OK,
        result
      })
    } catch(e) {

    }
  }
}
