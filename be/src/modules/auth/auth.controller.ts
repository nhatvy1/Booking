import { Body, Controller, Get, HttpStatus, Post, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { CreateUserDto } from '../user/dto/create-user.dto'
import { Response } from 'src/utils/response.type'
import { LoginDto } from './dto/login.dto'
import { JwtAuthGuard } from 'src/guards/jwt.auth.guard'
import { GetCurrentUser } from 'src/decorator/auth.user.decorator'
import { JwtPayload } from './interfaces/jwt.payload.interface'
import { JwtRefreshGuard } from 'src/guards/jwt-auth-refresh.guard'
import { TokenVerify } from './interfaces/token.interface'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: CreateUserDto) {
    const result = await this.authService.register(body)
    return Response({ statusCode: HttpStatus.OK, message: 'Success', result })
  }

  @Post('login')
  async login(@Body() body: LoginDto) {
    const result = await this.authService.login(body)
    return Response({ statusCode: HttpStatus.OK, message: 'Success', result })
  }

  @UseGuards(JwtAuthGuard)
  @Get('demo')
  async demo(@GetCurrentUser() user: JwtPayload) {
    return { msg: 'Test refresh token' }
  }

  @UseGuards(JwtRefreshGuard)
  @Get('/refresh-token')
  refreshToken(@GetCurrentUser('refreshToken') tokenVerify: TokenVerify) {
    return this.authService.refreshToken(tokenVerify)
  }
}
